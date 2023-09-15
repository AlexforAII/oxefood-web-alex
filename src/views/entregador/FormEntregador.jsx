import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador () {
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [RG, setRG] = useState();
    const [DTNascimento, setDTNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [QTDEntregasRealizadas, setQTDEntregasRealizadas] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [valorPorFrete, setvalorPorFrete] = useState();
    const [rua, setrua] = useState();
    const [numero, setnumero] = useState();
    const [bairro, setbairro] = useState();
    const [cidade, setcidade] = useState();
    const [CEP, setCEP] = useState();
    const [UF, setUF] = useState();
    const [complemento, setcomplemento] = useState();
    
    function salvar() {

		let entregadorRequest = {
		     nome: nome,
		     cpf: cpf,
             RG: RG,
             DTNascimento: DTNascimento,
             foneCelular: FoneCelular,
             QTDEntregasRealizadas, QTDEntregasRealizadas,
             foneFixo: FoneFixo,
		     valorPorFrete: valorPorFrete,
		     rua: rua,
		     numero: numero,
             bairro: bairro,
             cidade: cidade,
             CEP: CEP,
             UF: UF,
             complemento: complemento
		}
	
		axios.post("http://localhost:8082/api/cliente", entregadorRequest)
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

                    <h2> <span style={{color: 'darkgray'}}> Entegrador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                    required
                                    mask="999.999.999-99"
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                   fluid
                                   label='RG'
                                   value={RG}
                                   onChange={e => setRG(e.target.value)}
                                >
                               
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}>
                                    <InputMask 
                                    mask="99/99/9999" 
                                    maskChar={null}
                                    placeholder="Ex: 20/03/1985"
                                    value={DTNascimento}
                                    onChange={e => setDTNascimento(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                required
                                fluid
                                label='Fone Celular'
                                width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                >
                                    <InputMask 
                                        mask="99/99/9999"
                                        value={QTDEntregasRealizadas}
                                        onChange={e => setQTDEntregasRealizadas(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    value={valorPorFrete}
                                    onChange={e => setvalorPorFrete(e.target.value)}
                                > 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='Rua'
                                    value={rua}
                                    onChange={e => setrua(e.target.value)}
                                > 
                                 </Form.Input>

                                 <Form.Input
                                    fluid
                                    label='Número'
                                    value={numero}
                                    onChange={e => setnumero(e.target.value)}
                                > 
                                 </Form.Input>

                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='Bairro'
                                    value={bairro}
                                    onChange={e => setbairro(e.target.value)}
                                > 
                                 </Form.Input>

                                 <Form.Input
                                    fluid
                                    label='Cidade'
                                    value={cidade}
                                    onChange={e => setcidade(e.target.value)}
                                > 
                                 </Form.Input>

                                 <Form.Input
                                    fluid
                                    label='CEP'
                                    value={CEP}
                                    onChange={e => setCEP(e.target.value)}
                                > 
                                 </Form.Input>

                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='UF'
                                    value={UF}
                                    onChange={e => setUF(e.target.value)}
                                > 
                                 </Form.Input>

                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='Complemento'
                                    value={complemento}
                                    onChange={e => setcomplemento(e.target.value)}
                                > 
                                 </Form.Input>

                            </Form.Group>

                            <Form.Group>
                <Form.Field label="Ativo:"></Form.Field>
                <Form.Radio id="sim" name="ativo" value={"Sim"} label="Sim" />
                <Form.Radio id="nao" name="ativo" value={"Não"} label="Não" />
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