import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador() {
    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();

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

    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get("http://localhost:8082/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRG(response.data.RG)
                    setDTNascimento(formatarData(response.data.DTNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setQTDEntregasRealizadas(response.data.QTDEntregasRealizadas)
                    setvalorPorFrete(response.data.valorPorFrete)
                    setrua(response.data.rua)
                    setnumero(response.data.numero)
                    setbairro(response.data.bairro)
                    setcidade(response.data.cidade)
                    setCEP(response.data.CEP)
                    setUF(response.data.UF)
                    complemento(response.data.setcomplemento)


                })
        }
    }, [state])
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function salvar() {

        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            RG: RG,
            DTNascimento: DTNascimento,
            foneCelular: foneCelular,
            QTDEntregasRealizadas, QTDEntregasRealizadas,
            foneFixo: foneFixo,
            valorPorFrete: valorPorFrete,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            CEP: CEP,
            UF: UF,
            complemento: complemento
        }

        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8082/api/entregador/" + idEntregador, entregadorRequest)
                .then((response) => {
                    console.log('Entregador alterado com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao alter um entregador.')
                })
        } else { //Cadastro:
            axios.post("http://localhost:8082/api/entregador", entregadorRequest)
                .then((response) => {
                    console.log('Entregador cadastrado com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao incluir o entregador.')
                })
        }
    }


    return (

        <div>
            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idEntregador === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idEntregador != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

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

                        <div style={{ marginTop: '4%' }}>

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