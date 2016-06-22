require 'html-proofer'

# rake test
desc "Build and test the site"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./build", {:disable_external => true, :allow_hash_href => true}).run
  sh "bundle exec scss-lint"
end
