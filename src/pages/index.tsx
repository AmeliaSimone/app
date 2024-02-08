import Screen from "@/componets/layout/Screen";
import Body from "@/componets/layout/Body";
import Panel from "@/componets/layout/Panel";
import Section from "@/componets/layout/Section";
import {
  Table,
  TableHeader,
  TableDetail,
  TableRow,
  TableCell,
  TableCellEnd
} from "@/componets/layout/Table";

import Header from "@/componets/ui/Header";
import TextBox from "@/componets/ui/TextBox";
import ComboBox from "@/componets/ui/ComboBox";
import Icon from "@/componets/ui/Icon";
import Capsule from "@/componets/ui/Capsule";

export default function Home() {
  return (
    <>
      <Screen>
        <Header/>
        <Body>
          <Panel>
            <Section width="550px">
              <TextBox
                label="Empresa"
                text="BCI Seguros Generales S.A."
                width="530px"
              />
              <TextBox
                label="Beneficiario"
                text="MARIA BERNARDITA ISABEL MUÑOZ PARADA"
                width="530px"
              />
            </Section>
            <Section width="550px" wrap="wrap">
              <TextBox
                label="Producto"
                text="Sala De Urgencua Familiar 21UF"
                width="530px"
              />
              <ComboBox
                label="Asistencia"
                data={["Urgecia medica por enfermedad", "Otro Item"]}
                width="530px"
              />
              <TextBox  md="mitad"
                label="Monto disponible"
                text="0"
                width="190px"
              />
              <TextBox  md="mitad"
                label="Eventos"
                text="0"
                width="120px"
              />
              <TextBox md="completo"
                label="Límite"
                text=""
                width="210px"
              />
              <TextBox  md="mitad"
                label="Monto Utilizado"
                text="0"
                width="190px"
              />
              <TextBox  md="mitad"
                label="Eventos usados"
                text="0"
                width="120px"
              />
            </Section>
            <Section>
              <Table height="285px">
                <TableHeader>
                  <TableCell width="250px">Dato</TableCell>
                  <TableCell width="265px">Valor</TableCell>
                  <TableCellEnd></TableCellEnd>
                </TableHeader>
                <TableDetail>
                  <TableRow>
                    <TableCell width="250px">Tipo de previsión</TableCell>
                    <TableCell width="265px">ISAPRE</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width="250px">Fecha de nacimiento</TableCell>
                    <TableCell width="265px">20/10/1986</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width="250px">Rut del beneficiario</TableCell>
                    <TableCell width="265px">16.360.110-9</TableCell>
                  </TableRow>
                </TableDetail>
              </Table>
            </Section>
          </Panel>

          <Panel width="600px">
            <Section>
              <Table height="400px">
                <TableHeader>
                  <TableCell width="95px">Fecha</TableCell>
                  <TableCell width="60px">Hora</TableCell>
                  <TableCell width="180px">Operador</TableCell>
                  <TableCell width="204px">Etapa/Acción</TableCell>
                  <TableCell width="40px"></TableCell>
                  <TableCellEnd></TableCellEnd>
                </TableHeader>
                <TableDetail>
                  <TableRow>
                    <TableCell width="95px" aling="center">07/01/2024</TableCell>
                    <TableCell width="60px" aling="center">19:52</TableCell>
                    <TableCell width="180px" aling="start">Lia García</TableCell>
                    <TableCell width="204px" aling="start">Datos del servicio</TableCell>
                    <TableCell width="40px" aling="center">
                      <Icon name="search" color="#979797"></Icon>
                    </TableCell>

                  </TableRow>
                  <TableRow>
                    <TableCell width="95px" aling="center">07/01/2024</TableCell>
                    <TableCell width="60px" aling="center">19:52</TableCell>
                    <TableCell width="180px" aling="start">Lia García</TableCell>
                    <TableCell width="204px" aling="start">Datos del evento</TableCell>
                    <TableCell width="40px" aling="center">
                      <Icon name="search" color="#979797"></Icon>
                    </TableCell>

                  </TableRow>
                  <TableRow>
                    <TableCell width="95px" aling="center">07/01/2024</TableCell>
                    <TableCell width="60px" aling="center">19:52</TableCell>
                    <TableCell width="180px" aling="start">Lia García</TableCell>
                    <TableCell width="204px" aling="start">Datos del beneficiario</TableCell>
                    <TableCell width="40px" aling="center">
                      <Icon name="search" color="#979797"></Icon>
                    </TableCell>
                  </TableRow>
                </TableDetail>
              </Table>
            </Section>
            <Section aling="space-between">
              <Capsule backgroundColor="blue" text="3 acciones"></Capsule>
              <Capsule backgroundColor="#03495C" text="Chat"><Icon name="chat" color="white"></Icon></Capsule>
            </Section>
          </Panel>
        </Body>
      </Screen>
    </>
  );
}
