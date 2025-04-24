from os import path, listdir
from os.path import isfile, join
from re import sub

# This script assumes you're in the root directory, not the deploy folder!


new_css_content = []
css_dir = join('user', 'css')
for file in listdir(css_dir):
    filepath = join(css_dir, file)
    if not isfile(filepath): continue  # has someone messed with the directory?

    css_content = open(filepath, 'r', encoding='utf-8').read()
    fixed_content = sub(r'\.\.\/', '', css_content)  # remove parent directory lookups when importing images (because the resulting file will be in the parent dir)
    new_css_content.append(fixed_content)

open(join('user', 'styles.css'), 'w', encoding='utf-8').write('\n'.join(new_css_content))
