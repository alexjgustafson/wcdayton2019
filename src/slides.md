# Blazingly Fast Freedom 
## Headless WordPress and GatsbyJS 

![Blazingly Fast](https://wp.widget.pet/wp-content/uploads/2019/03/BlazinglyFast_sticker-1-e1551493979644.png)

WordCamp Dayton 2019 <br/>
Alex J. Gustafson <br/>
[wcdayton2019.alexjgustafson.tech](https://wcdayton2019.alexjgustafson.tech)

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
- WordPress.com or self-hosted WordPress
- Consider using a subdomain
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

# Let's try a live edit!

- [widget.pet](https://www.widget.pet/)
- [wp.widget.pet](https://wp.widget.pet/)

---

# Netlify

![Screenshot of Netlify Dashboard](https://wp.widget.pet/wp-content/uploads/2019/03/Overview___unruffled-williams-d217ff-e1551499156494.jpg)

---

# Other hosting options

https://www.gatsbyjs.org/docs/deploying-and-hosting/

---

# 3. Getting Started in Gatsby

---

# Configuration and Plugins

- Your starter will likely have several plugins already
- Install new plugins via npm or yarn
- Edit gatsby-config.js to include the new plugin and any required settings

---

# Configuration and Plugins

gatsby-config.js

![Screenshot of all of gatsby-config.js](https://wp.widget.pet/wp-content/uploads/2019/03/carbon4-1-e1551504570369.png)

---

# Configuration and Plugins

- Most plugins provide a feature that can be used within your React/Gatsby code
- "Source plugins" fetch data
- "Transform plugins" change information from source plugins

---

# GraphQL

A query language that looks an awful lot like JSON but isn't JSON.

---

# GraphQL

page.js

![Screenshot of page.js](https://wp.widget.pet/wp-content/uploads/2019/03/carbon5.png)

---

# GraphiQL

An IDE for trying out GraphQL queries

---

# GraphiQL

![Screenshot of GraphiQL in action](https://wp.widget.pet/wp-content/uploads/2019/03/GraphiQL-e1551505985746.jpg)

---

# Unstructured Data

You can ignore GraphQL entirely and use Gatsby's createPages API within gatsby-node.js

[See this great example in the GatsbyJS docs.](https://www.gatsbyjs.org/docs/using-gatsby-without-graphql/)

---

# Links

With a capital L

`<Link to="/howdy">Howdy</Link>`

---

# React from there on out

For the most part, other than these concepts you can write JSX just like you would in any other React app.

- Components
- Nested components
- Modular CSS

---

# 4. Pros and Cons

## Pros

- If this sounds more exciting than terrifying, that's the pro
- Modern JS tooling built-in
- No restriction on the _data_ your content creators manage
- Site visitors receive optimal performance

## Cons

- Doesn't "feel like" WordPress templates
- More complicated hosting setup
- WordPress plugins with complicated display can be cumbersome on the Gatsby side
- Frequency of updates may rule out Gatsby due to rebuild time

---

# 5. More Advanced Setups to Consider

- WP GraphQL plugin can allow GraphQL queries directly to WP instead of using a transformer
- Gatsby Themes and ports of WordPress themes. Checkout [gatsbywpthemes.com](https://gatsbywpthemes.com/)
- Host your Gatsby App and WP on the same domain, but different ports

---

# Blazingly Fast Questions?

@alexjgustafson on twitter

alexjgustafson.tech/contact

See me after for a sticker!

![Blazingly Fast](https://wp.widget.pet/wp-content/uploads/2019/03/BlazinglyFast_sticker-1-e1551493979644.png)
