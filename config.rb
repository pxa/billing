# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "public/assets/css"
sass_dir = "sass"
images_dir = "public/assets/img"
javascripts_dir = "public/assets/js"

add_import_path "sass/apps"

output_style = :compressed
environment = :production

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
