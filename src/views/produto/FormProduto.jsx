import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {
    const [titulo, settitulo] = useState();
   const [codigoDoProduto, setcodigoDoProduto] = useState();
   const [descricao, setdescricao] = useState();
   const [valorUnitario, setvalorUnitario] = useState();
   const [TempoDeEntregaMinimaEmMinutos, setTempoDeEntregaMinimaEmMinutos] = useState();
   const [TempoDeEntregaMaximaEmMinutos, setTempoDeEntregaMaximaEmMinutos] = useState();

   function salvar() {

    let produtoRequest = {
        titulo:titulo,
        codigoDoProduto: codigoDoProduto,
        descricao:descricao,
        valorUnitario: valorUnitario,
        TempoDeEntregaMinimaEmMinutos: TempoDeEntregaMinimaEmMinutos,
        TempoDeEntregaMaximaEmMinutos: TempoDeEntregaMaximaEmMinutos
    }

    axios.post("http://localhost:8082/api/cliente", produtoRequest)
    .then((response) => {
         console.log('Cliente cadastrado com sucesso.')
    })
    .catch((error) => {
         console.log('Erro ao incluir o um cliente.')
    })
}



    return (

        <div>
            <MenuSistema />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                >
                                 <InputMask 
                                        placeholder="Informe o título do produto "
                                        value={titulo}
			                      onChange={e => settitulo(e.target.value)}

                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>
                                    <InputMask 
                                        placeholder="Informe o código do produto "
                                        value={codigoDoProduto}
                                        onChange={e => setcodigoDoProduto(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Descrição'
                                    >
                                    <InputMask 
                                        placeholder="Informe a descrição do produto"
                                        value={descricao}
			                      onChange={e => setdescricao(e.target.value)}
                                    />
                                </Form.Input>
                                </Form.Group>

                                <Form.Group>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitario'
                                    value={valorUnitario}
			                      onChange={e => setvalorUnitario(e.target.value)}
                                    >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínima em Minutos'
                                   
                                    
                                >
                                    <InputMask 
                                        mask="99" 
                                        maskChar={null}
                                        placeholder="30"
                                        value={TempoDeEntregaMinimaEmMinutos}
                                        onChange={e => setTempoDeEntregaMinimaEmMinutos(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máxima em Minutos'
                                    
                                >
                                    <InputMask 
                                        mask="99" 
                                        maskChar={null}
                                        placeholder="40"
                                        value={TempoDeEntregaMaximaEmMinutos}
			                      onChange={e => setTempoDeEntregaMaximaEmMinutos(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
				inverted
				circular
				icon
				labelPosition='left'
				color='blue'
				floated='right'
				onClick={() => salvar()}
			>
				<Icon name='save' />
				Salvar
			</Button>


                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}