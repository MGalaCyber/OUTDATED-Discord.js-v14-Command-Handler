module.exports = {
    Events: [
        // Application events
        "applicationCommandCreate",
        "applicationCommandDelete",
        "applicationCommandUpdate",
        
        // Channel events
        "channelCreate",
        "channelDelete",
        "channelPinsUpdate",
        "channelUpdate",
        
        // Client events
        "debug",
        "error",
        "warn",
        'rateLimit',
        'ready',
        'invalidated',
        'invalidRequestWarning',
        
        // Emoji events
        "emojiCreate",
        "emojiDelete",
        "emojiUpdate",

        // Guild events
        "guildBanAdd",
        "guildBanRemove",
        "guildCreate",
        "guildDelete",
        "guildIntegrationsUpdate",
        "guildMemberAdd",
        "guildMemberAvailable",
        'guildMemberRemove',
        'guildMembersChunk',
        'guildMemberUpdate',
        'guildUnavailable',
        'guildUpdate',

        // Interaction events
        'interaction',
        'interactionCreate',
        
        // Invite events
        'inviteCreate',
        'inviteDelete',

        // Message events
        "message",
        'messageCreate',
        'messageDelete',
        'messageDeleteBulk',
        'messageReactionAdd',
        'messageReactionRemove',
        'messageReactionRemoveAll',
        'messageReactionRemoveEmoji',
        'messageUpdate',        

        // Role events
        'roleCreate',
        'roleDelete',
        'roleUpdate',

        // Shard events
        'shardDisconnect',
        "shardError",
        'shardReady',
        "shardReconnecting",
        'shardResume',

        // Stage events
        'stageInstanceCreate',
        'stageInstanceDelete',
        'stageInstanceUpdate',

        // Sticker events
        'stickerCreate',
        'stickerDelete',
        "stickerUpdate",

        // Thrad events
        "threadCreate",
        "threadDelete",
        "threadListSync",
        "threadMembersUpdate",
        "threadMemberUpdate",
        "threadUpdate",
        
        // Voice events
        "voiceStateUpdate",
        
        // Webhook events
        "webhookUpdate",
        
        // User events
        "typingStart",
        'userUpdate',
        'presenceUpdate',
    ]
}