function SendNotification(message, duration, type)
    duration = duration or 5000 -- Standardtid: 5000 ms om ingen tid anges
    type = type or "info" -- Standardtyp: 'info'
    SendNUIMessage({
        action = "showNotification",
        message = message,
        duration = duration,
        type = type
    })
end

-- Testkommando för att visa olika typer av notifikationer
RegisterCommand('testnotify', function(_, args)
    local message = args[1] or "swe-notify"
    local duration = tonumber(args[2]) or 5000

    -- Skicka en notifikation för varje typ
    SendNotification(message, duration, "success")
    SendNotification(message, duration, "error")
    SendNotification(message, duration, "info")
    SendNotification(message, duration, "warning")
end)

-- Exportera funktionen
exports('SendNotification', SendNotification)