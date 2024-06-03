from datetime import date
from os import listdir,path,remove,system
import shutil

def erase_unused_files():
    used = ['dist', '.git', 'deploy.py']
    dirs = listdir('./')

    for d in dirs:
        if (d not in used):
            if(path.isfile(d)):
                remove(d)
            else:
                if(path.isdir(d)):
                    shutil.rmtree(d)

def move_dist_and_clear():
    system('mv dist/* .')
    shutil.rmtree('dist')

def git_add_all_commit_and_push():
    system('git add *')
    system('git commit -m "deploy ' + date.today().strftime('%d/%m/%y') + '"') 
    system('git push')

system('yarn && yarn build')
system('git switch gh-pages')
erase_unused_files()
move_dist_and_clear()
git_add_all_commit_and_push()
