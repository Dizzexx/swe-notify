fx_version 'cerulean'
game 'gta5'

author 'SweLots'
description 'Notification system made by SweLots for QBCore'
version '1.0.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/app.js'
}

client_script 'client.lua'

exports {
    'SendNotification'
}