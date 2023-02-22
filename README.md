# General guidelines

## Products
To add a new product go to `_products` folder and make a copy of any file, for example `drupal.md`. Edit its content and filename. Save the file and run `bundle exec jekyll serve` to check in the local development environment.

Note: You will need to edit the `permalink` field (has to be unique) and `weight` to have them change order. We've setup sorting by weight and the steps are 10, 20, 30 so you can use 25 to get a page between 20 and 30.

## Services
The procedure is the same for services as well.

Note: Some services are links to external pages so they don't have the `permalink` field.

## Other pages
To change the content of pages like `/about` find the `_layouts` folder and find the file `about.html` file inside. Edit its content.

Some layouts in the `_layouts` folder like `teams` for example are not used but they were a part of the theme used at the start. They can be used at a later point if needed.

## Exceptions
Certain pages like `/about`, `/contact`, `/404` and the homepage have parts of their content in files in the root of the project. For example: you will need to go to `contact.md` to edit the text or the email address

## Images
The image thumbnails dimensions for the services page are 800x466
The image thumbnails dimensions for the products page and the about page are 609x425
For best results keep the dimensions consistent.

Note: If you decide to change the dimensions at some point you will need to change the dimensions for all images so it is best to stay with the format.

Use [photopea](https://www.photopea.com/) and [tinypng](https://tinypng.com/) for image optimization.

![product/about thumbnail tempalte](https://user-images.githubusercontent.com/13383578/220555751-74a47c75-c58d-4325-92a3-8aa11ad8fb28.png)
![service thumbnail tempalte](https://user-images.githubusercontent.com/13383578/220555958-4ea4caf3-d99c-4b93-bf97-6bbc8a732ad9.png)
