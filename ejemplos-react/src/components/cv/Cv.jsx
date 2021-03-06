import React, { Component } from 'react'
import Form from './Form';
import Preview from './Preview';

export default class Cv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'a',
            apellidos: 'b',
            email: 'c',
            skills: [
                {id: 0, skill: 'a'}, 
                {id: 1, skill: 'b'}
            ],
            nextId: 2
        }
        this.changeState = this.changeState.bind(this);
        this.addSkill = this.addSkill.bind(this);
    }

    changeState(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addSkill(nuevaSkill) {
        this.setState({
            skills: [...this.state.skills, {
                id: this.state.nextId,
                skill: nuevaSkill
            }],
            nextId: this.state.nextId + 1
        })
    }
    
    render() {
        const { nombre, apellidos, email, skills } = this.state;
        
        return (
            <div>
                <Form 
                    nombre={nombre} 
                    apellidos={apellidos}
                    email={email}
                    skills={skills}
                    changeState={this.changeState}
                    addSkill={this.addSkill} />
                <Preview 
                    nombreCompleto={nombre + ' ' + apellidos}
                    email={email}
                    skills={skills} />
            </div>
        )
    }
}
