# simpleweb
<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">Welcome!</h3>
  <p align="center">
    This is a personal project for playground.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-me">About me</a></li>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#local">Local</a></li>
        <li><a href="#docker">Docker</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#kubernetes-on-docker">Kubernetes on Docker</a></li>
  </ol>
</details>

## About me
Hi! I'm Daniel, currently am studying a Software Engineering major.
This repo is mainly to practice different technologies & tools such as: Jenkins, Travis CI, Docker, Kubernetes, etc.

This is a test to make a decent Readme file.

## About the project
Simpleweb is a very basic Node.Js application. It uses express to create an API server running on a <a href="https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p">enviroment variable</a> port. This project also contains `Dockerfile` to create containers on Docker and `YAML` files to deploy the app on a Kubernetes cluster using an `Ingress-nginx` load balancer.

It consist on a simple form with single text input and submit button that adds employees to an array. I expect most of people reading this (If there is any...) understand how this works in order to use this example.

Once you type something and press submit you will be redirected to another route that retrieves an array of the employees.

Feel free to use this project as an example, I hope it helps you!


## Getting started
In this section there are two ways to use this project.
* Local  | If you are just clone this repo and using it for whatever purposes.
* Docker | If you are using docker and pushing this project as an image.

### Local
I don't really know if this is helpful or not, but I'm adding this step for anyone who want to use this project as a test.

Install all the dependencies of the project.
We need to run this command inside the project's directory, in order to download all the packages from <a href="https://www.npmjs.com/"></a>.

```sh
  npm install 
  ```
#### Prerequisites
This project is made for using <a href="https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p">enviroment variable</a> like a said. So you will need to change the port variable manually.
At the beginning of the `index.js` file you will see the variable PORT. Just change it to whichever port you want.
Here is an example:
* Current code:
```sh
  const PORT = process.env.PORT;
  ```
* Example:
```sh
  const PORT = 3000;
  ```

Run the project.
```sh
  node index.js
  ```
That basically it! You can test the app by typing into your web browser `localhost`:`port`, and start playing around.

You will see in you command line:
`Server listening on port : <port>`

### Docker
If you want to use this project as an image use the following steps:

#### Prerequisites
In order to create a container you must install <a href="https://www.docker.com/">Docker</a> on your computer.

Because the container uses enviroment variables you need to use the command `-e` to set the enviroment variable, `-p` to map the port of the container and the port you want to expose locally.
* Here is the sintaxis:
```sh
  docker run --name <container name> -e "PORT=<port you want>" -p <port you wanted>:<port you want again> <docker image>
  ```
* Example:
```sh
  docker run --name simpleweb -e "PORT=3000" -p 8080:3000 jdaldeco/simpleweb
  ```
You will see in you command line:
`Server listening on port : <port>`

That basically it! You can test the app by typing into your web browser `localhost`:`port`, and start playing around.

## Usage
### Routes
The routes of the server, in other terms, the `URL` you are going to type in your browser (Also you can use `Postman` to test the server response) are the following:

GET
* `/employees`   | Retrieves a json of the employees.
* `/employees/:id`   | Retrieves the employee with the given id

POST
* `/employees` | Adds an employee to the array and displays the list of employees.

## Kubernetes on Docker
In the case you are a step foward of this, you can use the following command to deploy de app using `Kubectl CLI`. Localte on the project directory and type:
```sh
  kubectl apply -f k8s
  ```
`k8s` is the directory where all the YAML files are stored.


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/jdaldeco/simpleweb
[contributors-url]: https://github.com/jdaldeco/simpleweb

[forks-shield]: https://img.shields.io/github/forks/jdaldeco/simpleweb
[forks-url]: https://github.com/jdaldeco/simpleweb/network/members

[stars-shield]: https://img.shields.io/github/stars/jdaldeco/simpleweb
[stars-url]: https://github.com/jdaldeco/simpleweb/stargazers

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jdaldeco
