# ❗│Swe-Notify

## export to trigger notifications in other scripts:

### Success Message
exports['swe-notify']:SendNotification("Success!", 5000, "success")

### Error Message
exports['swe-notify']:SendNotification("Error!", 5000, "error")

### Info Message
exports['swe-notify']:SendNotification("This is a info message.", 5000, "info")

### Warning Message
exports['swe-notify']:SendNotification("WARNING WARNING!!", 5000, "warning")