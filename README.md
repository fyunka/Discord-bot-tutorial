# Discord Bot Tutorial (in Russian language)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![GitHub contributors](https://img.shields.io/github/contributors/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/contributors/) [![Open Source Love png1](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/) [![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/kennethreitz)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)


## Создание Discord бота

### **Вам понадобятся**:

- Редактор кода > [Visual Studio Code](https://code.visualstudio.com/)<br />
- [Node JS](https://nodejs.org/en/)<br />
- Библиотека Discord.js

### **Документация**

- [Discord.js Guide](https://discordjs.guide/)
- [Discord.js](https://discord.js.org/#/)

1) Открываете редактор кода (VSCode) и через **"Add workspace folder"** создаете папку для проекта.

![](images/15.29.16.png)

2) Открываете терминал в редакторе **> Terminal > New Terminal и вводите команду:**

```npm init``` 

![](images/15.35.27.png)

в конце на вопрос **Is this OK? (yes) >** набираете команду **yes** 

В рабочей папке появится файл **> package.json**

Открываете его в редакторе и в **"description"** прописываете описание вашего бота и по желанию в графе **"author"** (автор) свои инициалы. Сохраняете через шорткаты: 

```CMD + S``` для **Mac OS**  

```CTRL + S``` для **Windows**.

![](images/15.38.29.png)

3) Возвращаетесь в терминал и подключаете модуль Discord через **команду:**
                     
```npm install discord.js --save``` 

![](images/15.44.23.png)

4) Переходите в файл **index.js** и прописываете следующий код: 

```const Discord = require("discord.js");```

```const client = new Discord.Client();```

**NB:** Вместо **"Discord"** и **"client"** можно подставить свои названия.

5) Переходите на сайт [Discord Developer Portal](https://discordapp.com/developers/applications/) для регистрации бота в своем Discord через функцию **"New Application"**

![](images/15.49.21.png)

6) Далее копируете ```TOKEN``` своего бота (предварительно создав его через функцию **"Add bot"**) и переходите в редактор кода, дописывая следующую строку в файл ```auth.json```:

```json
{
    "token": "" // Place your bot TOKEN here
}
```

7) Переходите в файл ```index.js``` и подключаете ваш ```auth.json``` файл:

```const auth = require('./auth.json');```

![](images/15.50.53.png)

![](images/15.51.16.png)

8) Для добавления бота на сервер, переходите в раздел **"General Information"** и копируете **Client ID**.

![](images/15.50.37.png)

9) Далее переходите на страницу **Discord > Permissions Calculator**, тикаете все боксы, а в нижней графе **Client ID** вставляете скопированный **ID-номер**. Далее переходите по ссылке для авторизации и добавления бота на ваш сервер. 

![](images/DiscordPermissionsCalculator.png)


10) Прописываете приветсвенную команду для вашего бота в файле **index.js:** 

**Примечание:** Данный бот поприветствует нового участника сервера и задаст некоторые вопросы (вы можете указать любые другие соответственно):

```javascript

client.on('message', message => {
    if (message.type === 'GUILD_MEMBER_JOIN') {
        const user = message.author.username;
        const discriminator = message.author.discriminator;
        message.channel.send(`** Добро пожаловать, @${user}! :raising_hand:**
** Расскажи нам немного о себе: **
:zero: Как тебя зовут?
:one: Чем занимаешься [учишься/работаешь]?
`);
    }
});
```

11) Запускаете бота через терминал командой: <br /><br />
```node .```


![](images/14.45.11.png)

11) Для развертывания вашего приложения, вы можете воспользоваться бесплатным Paas-сервисом ```Heroku``` или ```Glitch``` , тогда ваш бот будет доступен 24/7.