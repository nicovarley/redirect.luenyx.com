from os import path, listdir
from os.path import isfile, join


# This script assumes you're in the root directory, not the deploy folder!


new_css_content = []
css_dir = join('user', 'css')
for file in listdir(css_dir):
    filepath = join(css_dir, file)
    if not isfile(filepath): continue  # has someone messed with the directory?
    new_css_content.append(open(filepath, 'r', encoding='utf-8').read())

open(join('user', 'styles.css'), 'w', encoding='utf-8').write('\n'.join(new_css_content))
