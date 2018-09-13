import React, { Component } from 'react';

import Resumo from './Components/Resumo/Resumo'
import Consultas from './Components/Consultas/Consultas'
import Faturamento from './Components/Faturamento/Faturamento'
import { Switch, Route } from 'react-router-dom'

class RouterLink extends Component{

    render(){

        return(

            <div>
                <Switch>
                    <Route path="/consultas" component={ Consultas }/>
                    <Route path="/faturamento" component={ Faturamento }/>
                    <Route path="/" component={ Resumo }/>
                </Switch>
            </div>
        )
    }
}

export default RouterLink