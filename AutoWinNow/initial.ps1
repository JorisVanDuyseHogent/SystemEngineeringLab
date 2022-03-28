# name the powershell window
$host.ui.rawui.WindowTitle = "AutoWinNow"

# if not elevated ask for elevation 
if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Start-Process powershell "-encodedcommand $([Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($script:MyInvocation.MyCommand.ScriptBlock)))" -Verb RunAs
    exit
}

# check if choco is installed
if(test-path "C:\ProgramData\chocolatey\choco.exe") {
    Write-Host "Choco install found"
    Choco install python3 -y
    Choco install git -y
    
    Clear-Host
    Write-Host "Python3 and Git installed!"

    # clone the pythonscript to the desktop (most logic place so that the user notices it after install is done)
    git clone git@github.com:JorisVanDuyseHogent/SystemEngineeringLab "C:\Users\$env:USERNAME\Desktop\SystemEngineeringLab\"
}

else {
    # Install Choco
    Write-Host "Choco has not been installed yet"
    Set-ExecutionPolicy Bypass -Scope Process -Force;
    Invoke-WebRequest "https://community.chocolatey.org/install.ps1" -UseBasicParsing | Invoke-Expression
}

# Enable darkmoder
Set-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize -Name AppsUseLightTheme -Value 0



Pause