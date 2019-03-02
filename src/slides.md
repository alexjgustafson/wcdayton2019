# Blazingly Fast Freedom 
## Headless WordPress and GatsbyJS 

![Blazingly Fast](https://wp.widget.pet/wp-content/uploads/2019/03/BlazinglyFast_sticker-1-e1551493979644.png)

WordCamp Dayton 2019 <br/>
Alex J. Gustafson <br/>
wcdayton2019.alexjgustafson.tech <br/>

---

# Agenda

1. What is "Blazingly Fast Freedom"
2. Setup 
3. Getting Started in Gatsby
4. Pros and Cons
5. More Advanced Setups to Consider
6. Questions

---

# 1. What is "Blazingly Fast Freedom"

---

# Freedom

![WordPress](https://wp.widget.pet/wp-content/uploads/2019/03/WordPress-logotype-wmark-e1551496820155.png)

---

# Democratize Publishing

> In 2018, the mission of “Democratize Publishing” to me means that people of all backgrounds, interests, and abilities should be able to access Free-as-in-speech software that empowers them to express themselves on the open web and to own their content.
<cite>Matt Mullenweg</cite>

[Dec 26 2018: Democratize Publishing, Revisited](https://ma.tt/2018/12/democratize-publishing-revisited/)

---

# Blazingly Fast

![Gatsby](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPgogIDxwYXRoIGQ9Ik02MDAgMEMyNjguNiAwIDAgMjY4LjYgMCA2MDBzMjY4LjYgNjAwIDYwMCA2MDAgNjAwLTI2OC42IDYwMC02MDBTOTMxLjQgMCA2MDAgMHpNMjY2LjYgOTMzLjNDMTc2LjEgODQyLjggMTMxIDcyNC42IDEyOS42IDYwNkw1OTQgMTA3MC40Yy0xMTguNi0xLjQtMjM2LjgtNDYuNS0zMjcuNC0xMzcuMXptNDM3LjcgMTI2LjFMMTQwLjYgNDk1LjdjNDcuNS0yMTAuMSAyMzUtMzY3LjEgNDU5LjQtMzY3LjEgMTU2LjkgMCAyOTUuNSA3NyAzODEuMiAxOTQuOUw5MTUuNiAzNzlDODQ1LjggMjc5LjUgNzMwLjUgMjE0LjMgNjAwIDIxNC4zYy0xNjcuNyAwLTMxMC4zIDEwNy43LTM2My4zIDI1Ny41bDQ5MS42IDQ5MS42YzEyMy40LTQzLjcgMjE4LTE0OC4yIDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDBjMCAyMjQuNS0xNTcgNDExLjktMzY3LjEgNDU5LjR6IiBmaWxsPSIjNjM5Ii8+Cjwvc3ZnPgo=)

---

# The Journey to a Content Mesh

![The Content Mesh ](https://wp.widget.pet/wp-content/uploads/2019/03/three-website-revolutions-1-e1551496187322.png)

<cite>["Delivering Modern Website Experiences: The Journey to a Content Mesh"](https://www.gatsbyjs.org/blog/2018-10-04-journey-to-the-content-mesh/) by Sam Bhagwat, Gatsby Co-founder</cite>

---

# Blazingly Fast Freedom

Using WordPress and Gatsby to make modern websites that everyone loves.

---

# 2. Setup

The goal is to store our data in a live WordPress site that our Gatsby app can fetch and build upon.

---

# WordPress

- Hosted anywhere, but the REST API needs to be public
- Consider using a subdomain
- WordPress.com or self-hosted WordPress
- Avoid adding any plugins at first unless their main goal is *data*

---

# WordPress

![Screenshot of wp.widget.pet](https://wp.widget.pet/wp-content/uploads/2019/03/simple-wp-e1551497724584.jpg)

---

# Install a Gatsby Dev Environment

- Node
- NPM
- Git
- Gatsby CLI [(documentation)](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli)
- Choose a Gatsby Starter at [gatsbyjs.org/starters](https://www.gatsbyjs.org/starters/)

Here's a starter for WordPress to try things out: [https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-starter-wordpress/](https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-starter-wordpress/)

---

# gatsby-starter-wordpress nit pick

Make sure your WP site has at least one post and it has a tag

---

# gatsby-source-wordpress settings

Edit `gatsby-config.js` and change baseUrl

![Portion of gatsby-config.js](https://wp.widget.pet/wp-content/uploads/2019/03/carbon3.png)

---

# Host Your Git Repo

e.g. Github, Gitlab, or Bitbucket

[github.com/alexjgustafson/widget.pet](https://github.com/alexjgustafson/widget.pet)

---

# Static Hosting and Continuous Integration

`gatsby build` needs to run for any update

---

# Deploy Plugin

🤠 Wild West 🤠

This is my current go-to: <br />
https://github.com/lukethacoder/wp-webhook-deploy-netlify

---

# Deploy Plugin

![Screenshot of WP-Webhook-Deploy-Netlify plugin settings](https://wp.widget.pet/wp-content/uploads/2019/03/Deploy_Webhook_Settings_Page_‹_Good_Dog_Widget_—_WordPress-e1551499398302.jpg)

---

# Netlify

![Screenshot of Netlify Dashboard](https://wp.widget.pet/wp-content/uploads/2019/03/Overview___unruffled-williams-d217ff-e1551499156494.jpg)

---

# 3. Getting Started in Gatsby

---

# Plugins

---

# GraphQL

---

# GraphiQL

---

# Unstructured Data

---

# Links

With a capital L

---

# 4. Pros and Cons

---

# Pros

- If this sounds more exciting than terrifying, that's the pro
- Performance first

---

# Cons

- Relies on npm/yarn packages more than WordPress plugins
- Complicated hosting setup


---

# 5. More Advanced Setups to Consider

- WP GraphQL plugin can allow GraphQL queries directly to WP instead of using a transformer
- Gatsby Themes and ports of WordPress themes  

---

# Blazingly Fast Questions?

@alexjgustafson on twitter

alexjgustafson.tech/contact

See me after for a sticker!

![Blazingly Fast](https://wp.widget.pet/wp-content/uploads/2019/03/BlazinglyFast_sticker-1-e1551493979644.png)
