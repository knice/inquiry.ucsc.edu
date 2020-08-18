# Inquiry @ UC Santa Cruz

Inquiry is the annual research magazine published by UC Santa Cruz. The premiere issue was published in June 2015. This repository contains all of the content for the Inquiry magazine web site.

- [Build specification](https://github.com/knice/inquiry.ucsc.edu/wiki)

## Local Development

This repo is a dockerized [Jekyll](https://jekyllrb.com/) instance (requires [Docker](https://www.docker.com/)).

Set up your project in your code directory

```shell
git clone git@github.com:knice/inquiry.ucsc.edu.git your-project-folder
cd your-project-folder
```

Fire it up.

```shell
docker-compose up
```

Stylesheets, fonts, images, and javascript files go in the `/source/_assets/` directory.

## Issues

If you have problems, please create a
[GitHub Issue](https://github.com/knice/inquiry.ucsc.edu/issues).

## Credits

This site is built with [Jekyll](http://jekyllrb.com/), tested and deployed with [Travis-CI](http://travis-ci.org/), and served from Netlify.

Inquiry magazine is Copyright &copy; 2015, The Regents of the University of California.
