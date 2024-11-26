function SendNotification(message, duration, type)
    duration = duration or 5000
    type = type or "info"
    SendNUIMessage({
        action = "showNotification",
        message = message,
        duration = duration,
        type = type
    })
end

RegisterCommand('testnotify', function(_, args)
    local message = args[1] or "swe-notify"
    local duration = tonumber(args[2]) or 5000

    SendNotification(message, duration, "success")
    SendNotification(message, duration, "error")
    SendNotification(message, duration, "info")
    SendNotification(message, duration, "warning")
end)

exports('SendNotification', SendNotification)