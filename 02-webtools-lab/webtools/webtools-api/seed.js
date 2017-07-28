const
  mongoose = require('mongoose'),
  Tool = require('./models/Tool'),
  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/webtools'

mongoose.Promise = global.Promise

const tools = [
  {
    name: "jQuery",
    description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/1280px-JQuery_logo.svg.png",
    documentationUrl: "https://jquery.com"
  },
  {
    name: "Bootstrap",
    description: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
    logoUrl: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-card.png",
    documentationUrl: "http://getbootstrap.com"
  },
  {
    name: "ReactJS",
    description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    logoUrl: "https://facebook.github.io/react/img/logo.svg",
    documentationUrl: "https://facebook.github.io/react/"
  }
]

mongoose.connect(mongoUrl, (err) => {
  if(err) return console.log(err)
  console.log("Connected MongoDB.")
  console.log("Clearing tools from database...")
  Tool.remove({}, (err) => {
    if(err) return console.log(err)
    console.log("Tools cleared from database...")
    console.log("Seeding database...")
    Tool.insertMany(tools, (err, result) => {
      if(err) return console.log(err)
      console.log("Database seeded...")
      console.log("Disconnecting...")
      mongoose.disconnect()
    })
  })
})
