const discord = require('discord.js');
//const config = require('./config.json');

const client = new discord.Client();

const prefix = '/';

const hareembed = {
    "content": "zaprati ig!",
    "title": "@hariskukuruzovic",
    "url": "https://www.instagram.com/hariskukuruzovic/",
    "color": 8721444,
    "image": {
      "url": "https://scontent.fsjj2-1.fna.fbcdn.net/v/t1.0-9/65302526_487890395280131_16837444326391808_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=gMGxkfr2XAQAX-RtG6m&_nc_ht=scontent.fsjj2-1.fna&oh=aa15d108df2371f46a892be3dee26ef9&oe=60401E98"
    },
    "author": {
      "name": "harebabo",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    }
  };


client.once('ready', () => {
    console.log('Sejo online');
});

client.on('presenceUpdate', (oldMember, newMember) => {
    let menber = newMember.member;
    if(menber.id === '29273316383313102'){
        if(oldMember.status === 'offline' && newMember.status === 'online'){
            client.channels.fetch('700812531433996290').then(channel => {
                channel.send('ooooh hackers', {
                    tts: true
                });
            });
        }
    }

});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) {
        const recenica = message.content.toLowerCase();
        recenica.trim();
        const commad = message.content.split(/ +/).shift().toLowerCase();

        if(recenica.includes('sex ili poso?')){
            message.channel.send('poso!');
        }else if(recenica.includes('sex il poso')){
                message.channel.send('poso!');         
        }else if(recenica.includes('sejo ima li kakvih stanova')){
            message.channel.send('https://www.olx.ba/pretraga?trazilica=pejton&sort_order=DESC&sort_po=datum&kategorija=2');
        }else if(recenica.includes(' ili ')){
            message.channel.send('DA');
        }else if(recenica.includes('ima li neko')){
            message.channel.send('imam ja! PUMPU ZA BICIKLO!!');
        }else if(recenica.includes('hoce li ko') || recenica.includes('hajmo ')){
            message.channel.send('hocu ja kantera');
        }else if(recenica.includes('ima li nas')){
            message.channel.send('fali jos jedan za lige');
        }else if(recenica.includes('dobar si ti sejo')){
            message.channel.send('hvala pasha!');
        }else if(recenica.includes('sta je niho?')){
            message.channel.send('ma debil');
        }else if(recenica.includes('sejo kralju')){
            message.channel.send('reci pasha?');
        }

        if(commad === 'hare?'){
            message.channel.send('BABOO!');
        }else if(commad === 'niho?'){
            message.channel.send('Debil!');
        }else if(recenica === 'alo svi'){
            message.channel.send('@everyone');
        }else if(recenica === 'harebabo'){
            message.channel.send({ embed:hareembed });
        }
    }
    else {
        const args = message.content.slice(prefix.length).split(/ +/);
        const commad = args.shift().toLowerCase();

        if(commad === 'selam'){
            message.channel.send('alejkumuselam');
        }else if(commad === 'niho?'){
            message.channel.send('debil');
        }else if(commad === 'hare?'){
            message.channel.send('BABOO!');
        }else if(commad === '.'){
            message.channel.send('https://www.facebook.com/kenan.nokee');
        }else if(commad === 'zena'){
            message.channel.send('https://www.google.com/search?q=butmir+stanovi&oq=butmir+stanovi&aqs=chrome..69i57j0i22i30l3.6089j0j7&sourceid=chrome&ie=UTF-8');
        }
            
    }
});


client.login(process.env.TOKEN);

