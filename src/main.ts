import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import linksToDownload from './links.ts';
import channel from './channel.ts';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadDouyinVideo = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true, timeout: 30000, });
    const directoryPath = path.join(__dirname, '..', channel);
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath);
    }
    const newJson: {
      [key: string]: {
        description: string;
        keywords: string;
        video: string;
        link: string;
      };
    } = {};
    if (fs.existsSync(path.join(__dirname, '..', channel, 'data.json'))) {
      const previousJson = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, '..', channel, 'data.json'),
          'utf-8',
        ),
      ) as typeof newJson;
      for (const title in previousJson) {
        const data = previousJson[title];
        newJson[title] = data;
      }
    };
    for (const link of linksToDownload) {
      const page = await browser.newPage();
      const i = Object.values(newJson).findIndex((data) => data.link === link)
      if(i !== -1) {
        console.log(`Link ${link} already exists`);
        continue;
      }
      await page.goto(link);
      console.log('Getting title...');
      const metaTags = await page.$$eval('meta', (elements) =>
        elements.map((element) => ({
          name: element.getAttribute('name'),
          content: element.getAttribute('content'),
        })),
      );
      const title: string = await page.$eval(
        'title',
        (element) => element.textContent,
      );
      console.log(`Title: ${title}`);
      const description: string = metaTags.find(
        (tag) => tag.name === 'description',
      )?.content;
      const filePath = path.join(directoryPath, `${title}.mp4`);
      if (fs.existsSync(filePath)) {
        console.log(`File ${filePath} already exists`);
        continue;
      }
      console.log(`Description: ${description}`);
      const keywords: string = metaTags.find(
        (tag) => tag.name === 'keywords',
      )?.content;
      console.log(`Keywords: ${keywords}`);
      newJson[title.split("\n").join(" ").trim()] = {
        description,
        keywords,
        video: `./${title.split("\n").join(" ").trim()}.mp4`,
        link,
      };
      await fsPromises.writeFile(
        path.join(__dirname, '..', channel, `data.json`),
        JSON.stringify(newJson, null, 2),
      );
      await page.goto(
        `https://godownloader.com/douyin-downloader#link=${encodeURIComponent(
          link,
        )}`,
      );
      const linkTag =
        '#item > div.p-4.my-4.border.rounded > div.text-center > div > div > div:nth-child(2) > div:nth-child(4) > a';
      await page.waitForSelector(linkTag);
      const downloadLink = await page.$eval(linkTag, (el) =>
        el.getAttribute('href'),
      );
      const response = await fetch(downloadLink);
      const buffer = await response.buffer();
      await fsPromises.writeFile(filePath, buffer);
      console.log(`Video ${title} downloaded`);
      await page.close();
    }
    await browser.close();
    const json = JSON.stringify(newJson, null, 2);
    fs.writeFileSync(path.join(__dirname, '..', channel, `data.json`), json);
    return newJson;
  } catch (error) {
    console.log(error);
    downloadDouyinVideo();
  }
};

downloadDouyinVideo()
