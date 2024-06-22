const express = require('express')
const router = express.Router()
const Projects = require('../models/projects')

router.get('/', async (req, res)=> {
    try {
        const allProjects = await Projects.find()
        res.json(allProjects)
    } catch (err) {
       res.status(500).json({ message: err.message}) 
    }})

router.get('/:id', getProjects, (req, res)=> {
    res.send(res.projects) })

router.post('/', async (req, res) => {
        const project = new Projects({
            name: req.body.name,
            link: req.body.link,
            description: req.body.description
        })
        try{
            const newProject = await project.save() 
            res.status(201).json(newProject)
        } catch(err) {res.status(400).json({message : err.message})}
    
    })
    
    
    router.delete('/:id', getProjects, async (req, res)=> 
    {
        const {id} = req.params;
        Projects.findByIdAndDelete({_id: id})
    
    
        try { 
            await res.project.deleteOne()
            res.json({ message : "you have deleted this project"})
            
        } catch (error) {
            res.send(500).json({ message: err.message })
            
        }
    })
    
    async function getProjects(req, res, next) {
        let project 
        try {
            project = await Projects.findById(req.params.id) 
            if (project == null) {
                return res.status(404).json({ message: 'cannot find project' })
            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
            
        }
    
        res.project = project
        next()
    }
    
    module.exports = router 