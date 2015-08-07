# Inquiry @ UC Santa Cruz

[![Build Status](https://travis-ci.org/knice/inquiry.ucsc.edu.svg?branch=master)](https://travis-ci.org/knice/inquiry.ucsc.edu)

Inquiry is the annual research magazine published by UC Santa Cruz. The premiere issue was published in June 2015. This repository contains all of the content for the Inquiry magazine web site.

## Getting Started

Set up your project in your code directory
```
git clone git@github.com:knice/inquiry.ucsc.edu.git your-project-folder
cd your-project-folder
git remote rm origin
git remote add origin your-repo-url
```

Install dependencies
```
bundle install
```

Run the server and watch for changes in your files
```
jekyll serve -w
```

Deploy to Github Pages
```
jekyll build && git subtree push --prefix build origin gh-pages
```

Stylesheets, fonts, images, and javascript files go in the `/source/_assets/` directory.
Vendor stylesheets and javascripts should go in each of their `/vendor/` directories.

## Issues

If you have problems, please create a
[GitHub Issue](https://github.com/knice/inquiry.ucsc.edu/issues).

## Credits

This site is built with [Jekyll](http://jekyllrb.com/), tested and deployed with [Travis-CI](http://travis-ci.org/), and served from a bucket on Amazon S3. This particular configuration of Jekyll is called [Proteus Jekyll](https://github.com/thoughtbot/proteus), created and maintained by [thoughtbot, inc](http://thoughtbot.com).

Inquiry magazine is Copyright &copy; 2015, The Regents of the University of California.
