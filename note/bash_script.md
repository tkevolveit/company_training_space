# Bash script note


I want to auto create a daily report file
-  copy previous daily report on weekdays

- set date
- cp file
- put on the same direction 
- got it

---


To automate your daily Git tasks on Windows using Bash, you can create a shell script and schedule it to run automatically every day using the native Windows Task Scheduler.

Here is the complete setup guide, including a production-ready script and configuration steps.


1. The Daily Git Bash ScriptCreate a text file, name it daily_git_sync.sh, and save it in a safe directory (for example: C:\Scripts\daily_git_sync.sh).

Open the file in a text editor (like VS Code or Notepad) and paste the following code. Make sure to save the file with LF line endings (Unix style) rather than CRLF (Windows style) so Git Bash can read it properly.


```bash
#!/bin/bash

# Target repository path (Use Unix-style paths: /c/path/to/folder instead of C:\path\to\folder)
TARGET_DIR="/c/Users/YourUsername/Documents/YourProject"

# Navigate to the repository
cd "$TARGET_DIR" || { echo "Directory not found. Exiting."; exit 1; }

# Check if it is a valid Git repository
if [ ! -d ".git" ]; then
    echo "Error: Not a git repository."
    exit 1
fi

echo "=== Starting Daily Git Sync: $(date) ==="

# 1. Pull latest changes from remote to avoid conflicts
git pull origin main

# 2. Stage all modifications and untracked files
git add .

# 3. Commit only if there are changes staged
if ! git diff-index --quiet HEAD --; then
    git commit -m "Daily automated backup: $(date +'%Y-%m-%d %H:%M:%S')"
    
    # 4. Push changes to the remote repository
    git push origin main
    echo "Changes successfully pushed."
else
    echo "No changes detected. Nothing to commit."
fi

echo "=== Sync Complete ==="
```
Note
Remember to repplace
`/c/Users/YourUsername/Documents/YourProject` with your actual project path, and change main to your active branch name if it differs.


2. Automate Daily with Windows Task Scheduler

Windows Task Scheduler cannot natively execute .sh files directly. Instead, you must configure it to launch the Git Bash executable and pass your script as an argumentPress Win + R, type taskschd.msc, and press Enter to open the Windows Task Scheduler. 
In the right-hand Actions panel, click Create Basic Task... 


Name: Type a recognizable name (e.g., Daily Git Backup) and click Next. 


Trigger: Select Daily and click Next. Set the exact time you want the script to run every day. 

Action: Select Start a program and click Next. 


Configure the Start a Program screen exactly as follows:
Program/script: Enter the path to your Git Bash executable. By default, it is:
`"C:\Program Files\Git\bin\bash.exe"`
Add arguments (optional): Direct Bash to log in and run your file:
`--login -i -c "/c/Scripts/daily_git_sync.sh"`
Start in (optional): Enter the folder where the script lives to give it context:
`C:\Scripts `


Click Next, review your settings, and click Finish