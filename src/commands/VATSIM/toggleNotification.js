const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            name: "Notification",
            cooldown: 10,
            permissionLevel: 6,
            subcommands: true,
            description: 'Toggle the notifications for when controllers connect to VATSIM.',
            usage: '<enable|disable> [Channel:channel]',
            usageDelim: ' '
        });
    }

    async enable(message, [channel]) {
        if (message.mentions.channels.first()) {
            await message.guild.settings.update('notify_channel', channel.id);
            message.reply(`you have successfully enabled the notifications in ${message.guild.channels.cache.get(channel.id).toString()}`);
        }
        else {
            message.channel.send('You must mention a channel to enable the notifications in.');
        }
        
    }

    async disable(message) {
        await message.guild.settings.reset('notify_channel');
        message.reply('you have successfully disabled notifications');
    }

    async run(message, [...params]) {
        // This is where you place the code you want to run for your command
        ;
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};
