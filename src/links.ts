const linksToDownload = [
  'https://www.douyin.com/video/7216917920373296439',
  'https://www.douyin.com/video/7108938975120739598',
  'https://www.douyin.com/video/7116365912835509511',
  'https://www.douyin.com/video/7260060373997358388',
  'https://www.douyin.com/video/7259678198500232483',
  'https://www.douyin.com/video/7259230133536574755',
  'https://www.douyin.com/video/7258964431449689378',
  'https://www.douyin.com/video/7258574088480754959',
  'https://www.douyin.com/video/7257825545176632628',
  'https://www.douyin.com/video/7257368612996975912',
  'https://www.douyin.com/video/7257081145903320355',
  'https://www.douyin.com/video/7256353504694979874',
  'https://www.douyin.com/video/7255990062284803380',
  'https://www.douyin.com/video/7255596442058902836',
  'https://www.douyin.com/video/7255225235224530176',
  'https://www.douyin.com/video/7254493827174501667',
  'https://www.douyin.com/video/7254120787668438324',
  'https://www.douyin.com/video/7253386195231690018',
  'https://www.douyin.com/video/7252672592283192628',
  'https://www.douyin.com/video/7251952482576764200',
  'https://www.douyin.com/video/7250415578567953679',
  'https://www.douyin.com/video/7249953619712281908',
  'https://www.douyin.com/video/7249671610045648162',
  'https://www.douyin.com/video/7249309009168043298',
  'https://www.douyin.com/video/7248930897603431695',
  'https://www.douyin.com/video/7248557927252938019',
  'https://www.douyin.com/video/7248174240128650511',
  'https://www.douyin.com/video/7247433136215215395',
  'https://www.douyin.com/video/7246690653579726115',
  'https://www.douyin.com/video/7245570013162229026',
  'https://www.douyin.com/video/7244096339582160162',
  'https://www.douyin.com/video/7244093842381688122',
  'https://www.douyin.com/video/7243642173000846632',
  'https://www.douyin.com/video/7242999897346034979',
  'https://www.douyin.com/video/7242513478139907362',
  'https://www.douyin.com/video/7242235589070785807',
  'https://www.douyin.com/video/7241519306876390690',
  'https://www.douyin.com/video/7241403347863997736',
  'https://www.douyin.com/video/7241029762682981666',
  'https://www.douyin.com/video/7240763818505194792',
  'https://www.douyin.com/video/7240660797758754048',
  'https://www.douyin.com/video/7240011314297425152',
  'https://www.douyin.com/video/7237438411945053455',
  'https://www.douyin.com/video/7236972127495245108',
  'https://www.douyin.com/video/7235929275067534650',
  'https://www.douyin.com/video/7234823658580004133',
  'https://www.douyin.com/video/7233709326060309821',
  'https://www.douyin.com/video/7232597046618836283',
  'https://www.douyin.com/video/7231768604629355833',
  'https://www.douyin.com/video/7231391333552852261',
  'https://www.douyin.com/video/7230639464949812535',
  'https://www.douyin.com/video/7229266697075625275',
  'https://www.douyin.com/video/7228523640105553212',
  'https://www.douyin.com/video/7228164422659837245',
  'https://www.douyin.com/video/7227671421923691831',
  'https://www.douyin.com/video/7227451003891748152',
  'https://www.douyin.com/video/7227298890410659129',
  'https://www.douyin.com/video/7226929584057355579',
  'https://www.douyin.com/video/7226557006650314039',
  'https://www.douyin.com/video/7226198258765401401',
  'https://www.douyin.com/video/7225815638588099897',
  'https://www.douyin.com/video/7224799799747382589',
  'https://www.douyin.com/video/7223990775187574053',
  'https://www.douyin.com/video/7223215913594670394',
  'https://www.douyin.com/video/7221742371732507960',
  'https://www.douyin.com/video/7221469582576405817',
  'https://www.douyin.com/video/7221156370823925053',
  'https://www.douyin.com/video/7221099848446086457',
  'https://www.douyin.com/video/7220992342646361399',
  'https://www.douyin.com/video/7220639491449539897',
  'https://www.douyin.com/video/7220374720703696185',
  'https://www.douyin.com/video/7219879555195030841',
  'https://www.douyin.com/video/7219507220252265783',
  'https://www.douyin.com/video/7219134072151428408',
  'https://www.douyin.com/video/7218766210245119292',
  'https://www.douyin.com/video/7218572760610524477',
  'https://www.douyin.com/video/7218395154946788669',
  'https://www.douyin.com/video/7218118585527307577',
  'https://www.douyin.com/video/7217666847498358076',
  'https://www.douyin.com/video/7217283468969987389',
  'https://www.douyin.com/video/7217025886346825018',
  'https://www.douyin.com/video/7215538300801649957',
  'https://www.douyin.com/video/7214681010078780730',
  'https://www.douyin.com/video/7214313478599806266',
  'https://www.douyin.com/video/7213947100487257404',
  'https://www.douyin.com/video/7213285647640038715',
  'https://www.douyin.com/video/7212852295913065786',
  'https://www.douyin.com/video/7212086017522748729',
  'https://www.douyin.com/video/7211813839279557925',
  'https://www.douyin.com/video/7211343843160083767',
  'https://www.douyin.com/video/7210978443972988216',
  'https://www.douyin.com/video/7210602296357539131',
  'https://www.douyin.com/video/7210234508812029241',
  'https://www.douyin.com/video/7209862052972662072',
  'https://www.douyin.com/video/7209490194213424439',
  'https://www.douyin.com/video/7209118544401812795',
  'https://www.douyin.com/video/7208856896940330298',
  'https://www.douyin.com/video/7208471199997791543',
  'https://www.douyin.com/video/7208102502296849725',
  'https://www.douyin.com/video/7207733190616763707',
  'https://www.douyin.com/video/7207368405937081657',
  'https://www.douyin.com/video/7206984300175215927',
  'https://www.douyin.com/video/7205517089824623931',
  'https://www.douyin.com/video/7204392722810047802',
  'https://www.douyin.com/video/7203180346853100857',
  'https://www.douyin.com/video/7202586007491874103',
  'https://www.douyin.com/video/7202546801684122917',
  'https://www.douyin.com/video/7202181453000527163',
  'https://www.douyin.com/video/7201794241519979834',
  'https://www.douyin.com/video/7201420158001368376',
  'https://www.douyin.com/video/7201044722498981176',
  'https://www.douyin.com/video/7200602254578060602',
  'https://www.douyin.com/video/7199930639636876604',
  'https://www.douyin.com/video/7199197678792641849',
  'https://www.douyin.com/video/7197006218211151161',
  'https://www.douyin.com/video/7196613156016295223',
  'https://www.douyin.com/video/7194750422790229303',
  'https://www.douyin.com/video/7194647014141873463',
  'https://www.douyin.com/video/7193627923595709752',
  'https://www.douyin.com/video/7192530063479278906',
  'https://www.douyin.com/video/7189544951959620920',
  'https://www.douyin.com/video/7187703950055902501',
  'https://www.douyin.com/video/7186962740492111159',
  'https://www.douyin.com/video/7185832940654382395',
  'https://www.douyin.com/video/7185499904674975036',
  'https://www.douyin.com/video/7185143233654050105',
  'https://www.douyin.com/video/7182778420294700344',
  'https://www.douyin.com/video/7182027186805706043',
  'https://www.douyin.com/video/7180663724020223289',
  'https://www.douyin.com/video/7179168067153399100',
  'https://www.douyin.com/video/7178059776184601893',
  'https://www.douyin.com/video/7177221576402750757',
  'https://www.douyin.com/video/7176935137836387621',
  'https://www.douyin.com/video/7176494756472606012',
  'https://www.douyin.com/video/7176185445129260348',
  'https://www.douyin.com/video/7175369030323162426',
  'https://www.douyin.com/video/7174993166343343420',
  'https://www.douyin.com/video/7174238679962094879',
  'https://www.douyin.com/video/7172848723796495629',
  'https://www.douyin.com/video/7172100884724223246',
  'https://www.douyin.com/video/7171646684303265060',
  'https://www.douyin.com/video/7171021803790322957',
  'https://www.douyin.com/video/7170637221849058590',
  'https://www.douyin.com/video/7170296647325322503',
  'https://www.douyin.com/video/7169885916226407694',
  'https://www.douyin.com/note/7169513549474057503',
  'https://www.douyin.com/video/7169133352564395272',
  'https://www.douyin.com/video/7167252954116918536',
  'https://www.douyin.com/video/7166447646578724132',
  'https://www.douyin.com/video/7165344416650005767',
  'https://www.douyin.com/video/7164963588841508126',
  'https://www.douyin.com/video/7164592942915587364',
  'https://www.douyin.com/video/7163124131381169444',
  'https://www.douyin.com/video/7160257700289383693',
  'https://www.douyin.com/video/7159484890084281631',
  'https://www.douyin.com/video/7158747003286031624',
  'https://www.douyin.com/video/7158026623332158757',
  'https://www.douyin.com/video/7157253402550881572',
  'https://www.douyin.com/note/7156906077949299981',
  'https://www.douyin.com/video/7155813058575715620',
  'https://www.douyin.com/video/7154939569044081934',
  'https://www.douyin.com/video/7150994642685676836',
  'https://www.douyin.com/video/7148039071607082270',
  'https://www.douyin.com/video/7147251424122965256',
  'https://www.douyin.com/video/7146039558201691400',
  'https://www.douyin.com/video/7145779506383523080',
  'https://www.douyin.com/video/7145014136081009927',
  'https://www.douyin.com/video/7144743767382281480',
  'https://www.douyin.com/video/7143542042373786910',
  'https://www.douyin.com/video/7143165193135164685',
  'https://www.douyin.com/video/7142791295906434335',
  'https://www.douyin.com/video/7142084698905365790',
  'https://www.douyin.com/video/7141344488131136776',
  'https://www.douyin.com/video/7140854277685202183',
  'https://www.douyin.com/video/7140190808162012447',
  'https://www.douyin.com/video/7139915361926860062',
  'https://www.douyin.com/video/7139116128080563470',
  'https://www.douyin.com/video/7137253922401570084',
  'https://www.douyin.com/video/7136896156574960926',
  'https://www.douyin.com/video/7136515922428202277',
  'https://www.douyin.com/video/7136173680920431886',
  'https://www.douyin.com/video/7135274769594813727',
  'https://www.douyin.com/video/7134541888400542983',
  'https://www.douyin.com/video/7134305768878181663',
  'https://www.douyin.com/video/7133067283043192101',
  'https://www.douyin.com/video/7131933912342727949',
  'https://www.douyin.com/video/7131564961427475725',
  'https://www.douyin.com/video/7131356957885222180',
  'https://www.douyin.com/video/7131212635978091812',
  'https://www.douyin.com/video/7130932251155549454',
  'https://www.douyin.com/video/7130604630416903437',
  'https://www.douyin.com/video/7130170090762358023',
  'https://www.douyin.com/video/7129858104996400421',
  'https://www.douyin.com/video/7129479200045632782',
  'https://www.douyin.com/video/7129133027975810318',
  'https://www.douyin.com/video/7128966532629007629',
  'https://www.douyin.com/video/7128226112378817829',
  'https://www.douyin.com/video/7127855532735466783',
  'https://www.douyin.com/video/7127486273635290398',
  'https://www.douyin.com/video/7126851733795523853',
  'https://www.douyin.com/note/7126793214325001502',
  'https://www.douyin.com/video/7126461960073252132',
  'https://www.douyin.com/video/7126156015128579335',
  'https://www.douyin.com/video/7125807608442719519',
  'https://www.douyin.com/video/7125625241749048607',
  'https://www.douyin.com/video/7125349241697864974',
  'https://www.douyin.com/video/7124914804518636808',
  'https://www.douyin.com/video/7124523592750009613',
  'https://www.douyin.com/video/7124297722479316254',
  'https://www.douyin.com/video/7123448641171279140',
  'https://www.douyin.com/video/7122036159529766157',
  'https://www.douyin.com/video/7121362504512474404',
  'https://www.douyin.com/video/7119788056084811015',
  'https://www.douyin.com/video/7119698956409425189',
  'https://www.douyin.com/video/7119052120225025287',
  'https://www.douyin.com/video/7118694536905362695',
  'https://www.douyin.com/video/7118562692394208542',
  'https://www.douyin.com/video/7118370465101499656',
  'https://www.douyin.com/video/7118178703355415844',
  'https://www.douyin.com/video/7117941903244447007',
  'https://www.douyin.com/note/7116741119618108709',
  'https://www.douyin.com/video/7116075020434050311',
  'https://www.douyin.com/video/7115778918979833119',
  'https://www.douyin.com/video/7115276427339009310',
  'https://www.douyin.com/video/7114898343360285989',
  'https://www.douyin.com/video/7114557597407005989',
  'https://www.douyin.com/video/7113743896320003341',
  'https://www.douyin.com/video/7113485661490990350',
  'https://www.douyin.com/video/7113045297219079460',
  'https://www.douyin.com/note/7112432023108734222',
  'https://www.douyin.com/video/7111902292789480740',
  'https://www.douyin.com/video/7111546983784959273',
  'https://www.douyin.com/video/7111325785700453673',
  'https://www.douyin.com/video/7109327270296194311',
  'https://www.douyin.com/video/7107987235265383716',
  'https://www.douyin.com/video/7107671754314730782',
  'https://www.douyin.com/video/7107563273553349896',
  'https://www.douyin.com/video/7106773866508274958',
  'https://www.douyin.com/video/7106357015911353630',
  'https://www.douyin.com/video/7105796175038532877',
  'https://www.douyin.com/video/7104866595717008648',
];

export default linksToDownload;
