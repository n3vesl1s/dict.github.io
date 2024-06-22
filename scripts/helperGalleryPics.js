function renderImagesWithCaptions(imageArray) {
    const container = document.createElement('div');
    container.className = 'image-container';
    imageArray.forEach(imageObj => {
        const imgElement = document.createElement('img');
        imgElement.src = imageObj.url;
        const captionElement = document.createElement('p');
        captionElement.textContent = imageObj.caption;
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        wrapper.appendChild(imgElement);
        wrapper.appendChild(captionElement);
        container.appendChild(wrapper);
    });
    return container;
}
const imagesWithCaptions = [
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/lywjk9b3a2qc1_1.png', 
        caption: 'Кафиф' },
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/1202291472229994506.webp', 
        caption: 'Пися'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/generation.png', 
        caption: 'Furstur' },
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG20231126145500.png', 
        caption: 'Кот Ghiggi' },
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG_6180.jpg', 
        caption: 'Youngbomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG_20240131_084803-1.jpg', 
        caption: 'Angrybomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/7ad6464d8c48bd340b0ddbdc99314383.png', 
        caption: 'Miofif'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/image0.jpg', 
        caption: 'Это DenisC'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/bruh-6.jpg', 
        caption: 'looks cool (FurryC)'},      
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/104_20230702102242.png', 
        caption: 'I am horny! (Miobomb)'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/IMG_4767.jpg', 
        caption: 'я теперь фуре! (Nosleep)'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/235_20240214123654.png', 
        caption: "Ава миобомба"},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/78_20240607203549.png', 
        caption: 'I feel so фура! (Vustur)'}, 
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/68_20240524214835.png', 
        caption: 'Фура стафф'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/54_20240511221346.png', 
        caption: 'Фото миобомба с фильтром'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/47_20240509225649.png', 
        caption: 'Foxtur'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_2024-02-21-20-39-36-78_572064f74bd5f9fa804b05334aa4f912.jpg', 
        caption: 'Kerfus'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_2024-02-24-16-36-31-36_99c04817c0de5652397fc8b56c3b3817.jpg', 
        caption: 'Happybomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_2024-05-16-00-22-01-70_572064f74bd5f9fa804b05334aa4f912.jpg', 
        caption: 'Ролить соль (Nosleep)'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/image1.jpg', 
        caption: 'Rekafif или Kafif'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/image2.jpg',
        caption: 'Fif issue'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/Screenshot_956.png',
        caption: 'Kerfusbomb'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/4ce3e7e0a9396c7931495d504121a027.png', 
        caption: 'Nosleep'},
    { url: 'https://n3vesl1s.github.io/dict/images/gallery/1108024359160918056.webp', 
        caption: 'Rekafif'},
    { url: 'https://media.discordapp.net/attachments/1253263045552242739/1253415765076480041/9e8ee83c1786ee25423b5c980087408a.jpg?ex=6675c5e5&is=66747465&hm=561eb431ea1c6207a50586f929e2a81ab729b724702e4ace2cc0302e42a304b0&=&format=webp',
        caption: 'Шаурма'},
    { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253415541721268286/defdc31078c81f2f3f684b2598ba36d4.jpg?ex=66766e70&is=66751cf0&hm=7ba08e872b6da273ca3fd635beaf69964c349b3d787437fc2e29705ca41fc024&',
         caption: 'Аргумент'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253418092579782780/IMG_6185.jpg?ex=667670d0&is=66751f50&hm=e965ffade7550d5b86d13d74bb24d2192bb081be1126b8ea941e4d0198cf4633&', 
         caption: 'Putinbomb'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253640793382719558/image.png?ex=6677e8f8&is=66769778&hm=727a1011c6ae499a53f99d5daf8559c4f92e5b518cc2a52427e0b829ec19542b&',
         caption: 'Фура хелпер'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253641136640102461/image.png?ex=6677e94a&is=667697ca&hm=dd2a42d6a183128f2bbcf767824cc3b9e3723f11778ff4eed3400071a224ee91&',
         caption: 'Аж под аж ож об the morning will be great'},
     { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253643794243518555/IMG_4620.jpg?ex=66769a44&is=667548c4&hm=78588cac7bac3c08209c4cf250cb50b34f5e365b30d13b6e310af23024020255&',
         caption: 'Фураслип отправляет стикер'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670027236737055/IMG_6184.jpg?ex=6676b2b2&is=66756132&hm=fca5bfa02c963d430708d75ff4c811d89479650de8aa6912f26304f7578c5c66&', 
         caption: 'Мио Зеленский'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670067812438066/image_1.webp?ex=6676b2bc&is=6675613c&hm=45e21ecf19b3ef4b57e37d366d90a145478fd9f0548f85e5db62ee54001b332c&', 
         caption: 'Фафиф торт'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670146111705108/Screenshot_20240614-183326_1.jpg?ex=6676b2ce&is=6675614e&hm=d3e6c70dc0fc04a7ccf3752b026d5b1d0d86b354d5fcbd450ae04daf0ed1f8f1&', 
         caption: 'Миобомб с обращения'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670374743347200/IMG_20240523_142849_650.jpg?ex=6676b305&is=66756185&hm=d911ea112e7a325c71ba9f1baa19e6cdd54a93631d74c2d439af2bd8f5af31a5&', 
         caption: 'ДенисЦ орёт на ФурриЦ'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670400064487424/33_20240524213920.png?ex=6676b30b&is=6675618b&hm=6dfbead13b7db77ec59e0b40c3aaa26b995c81908b268da856501537f47780a8&', 
         caption: 'Пушистый и ноутбук с миобомбом'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670412907184129/IMG_20240523_142831_934.jpg?ex=6676b30e&is=6675618e&hm=a86adcda93bbbb619167677b044874066f18daa331f831feecfb1875ea74edb5&', 
         caption: 'Кафиф зевает ирл'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670458075779124/IMG_20240523_142736_687.jpg?ex=6676b319&is=66756199&hm=6748db9af99457412693f5823928c140fc1ef5348ef3525f7d95772635a95e80&', 
         caption: 'Нарисованная иконка копирования'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670581807743006/49_20240510140706.png?ex=6676b336&is=667561b6&hm=51bdd60908b0ad83c1c8510d92ee7869322abd49e23a9e44d6e67893409d91b5&', 
         caption: 'Миобомб и миобомб и миобомб...'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670638762328144/image-233.png?ex=6676b344&is=667561c4&hm=1e548f3355b58fe3d514cd3cfde72567c66d4fa5904813ae6a5b45c9e35fc09e&', 
         caption: 'Аж под об the morning😏🤫'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670797311082506/nVhVgZi.png?ex=6676b36a&is=667561ea&hm=b594cf7485e59f05e3a07ab8f725b47c96312f37ec1cdd00fec578b9500b797e&', 
         caption: 'Фифляндия'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253670926994640960/d4I1taG.png?ex=6676b389&is=66756209&hm=bd1788a830c281e52dfae40ba2c6e0eb54b95259271fdfaf33afa03306c62002&', 
         caption: 'Хитрый миобомб'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253671059421659227/LLMa4mN.png?ex=6676b3a8&is=66756228&hm=e03b8af7a1e9de24227e573ee0c18c04efd00d2a78f4582cdefe5bd1be21063b&', 
         caption: 'Zombiebomb'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253671110109560902/dfRJh1e.png?ex=6676b3b4&is=66756234&hm=f1c70ba98980541df3e6bcdbb22e26cb70ad7d9b8539d0a7d9ccdf572f9db599&', 
         caption: 'Очень злой миобомб'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253671138505134161/d1kVAw9.png?ex=6676b3bb&is=6675623b&hm=64d80f7af260fdda28766e509b637dee2ed28e4a0f41de8c89788a0079330f0c&', 
         caption: 'Успех кафифа'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253671179508777135/JVpPuQH.png?ex=6676b3c5&is=66756245&hm=bbc7d777697c72adb9d235b8d324200775a43ac6fdb74ee57a391883ef844e75&', 
         caption: 'Фура рекафиф и его семья'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253713691321569371/ogMpQOvoIw.png?ex=6677841c&is=6676329c&hm=74c259e9253c1a37b2d6b8b25b0c566b2eb9bf030213bc8c2c20cb6e9c566fba&', 
         caption: 'Миньонбомб'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253723969576767559/IMG_20240511_144705_0335.jpg?ex=66778daf&is=66763c2f&hm=341a0d1664c104bcb1557836e1cb08934218c3cf19d74f1be69ea7524e81177b&', 
         caption: 'Довольный миобомб'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253724502077079552/attachment.png?ex=66778e2e&is=66763cae&hm=a6b4ee77257234fc42e79154325f7ac861f3a405175c5275653149e948321ea6&', 
         caption: 'miobomb noob'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253726030753959956/IMG_1525.jpg?ex=66778f9a&is=66763e1a&hm=1ce1a203fa033b6a56a3ac9375aeddb7fe9faef31c4a2447cbcb7c85937e2df3&', 
         caption: 'Rekafif is a right guy'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253726031232368690/Screenshot_20240105-0106042.png?ex=66778f9a&is=66763e1a&hm=a44cc1e5f87f09a9b7f56bc2d1d4f7eddf4c60e9c37d539d67660835aa9d54f0&', 
         caption: 'Арт пивозавра'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253726031735558247/247_20240307162932.png?ex=66778f9b&is=66763e1b&hm=fc48680b7dfe16c6460dcc9a5e68a009f5fd0604848cff55e6832b0779d2879c&', 
         caption: 'Quadrofif'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253726032519761920/253_20240307230207.png?ex=66778f9b&is=66763e1b&hm=0f10c9247495f6b5699fd13568c95f939ab7ab653580c7a644467e2026e88c39&', 
         caption: 'Огромный капибомб'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253726033480388688/260_20240310011856.png?ex=66778f9b&is=66763e1b&hm=0c995a44f9d1f0743a550291a30e159fdb5714f1ea4cd96b1434b2c9bc48877f&', 
         caption: 'Осабомб'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253726034017128528/IMG20240310212223.jpg?ex=66778f9b&is=66763e1b&hm=c7a117fa6f11df1867ab4f7eb5b7aec6079ec3681ff20e16b5652de26b76380c&', 
         caption: 'Довольный маньяк мио'},
      { url: 'https://cdn.discordapp.com/attachments/1253263045552242739/1253727775672635392/image0-40.jpg?ex=6677913a&is=66763fba&hm=57ca71fedf1ab4b6cc2dffc82bb58e85ddaf54eb5f9c0d2c627e4a60f2294989&', 
         caption: 'Свинарник в форме авы DenisC'},


];
document.body.appendChild(renderImagesWithCaptions(imagesWithCaptions));

// { url: '', 
//     caption: ''},
