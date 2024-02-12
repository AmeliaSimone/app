import React from "react";

import Screen from "@/components/layout/Screen";
import Body from "@/components/layout/Body";
import Panel from "@/components/layout/Panel";
import Section from "@/components/layout/Section";
import {
  Table,
  TableHeader,
  TableDetail,
  TableRow,
  TableCell,
  TableCellEnd,
} from "@/components/ui/Table";

import Header from "@/components/ui/Header";
import TextBox from "@/components/ui/TextBox";
import ComboBox from "@/components/ui/ComboBox";
import Icon from "@/components/ui/Icon";
import Capsule from "@/components/ui/Capsule";
import Button from "@/components/ui/Button";

import styles from "./Case.module.scss";

export const Case = () => {
  return (
    <Screen>
      <Header />
      <Body className={styles.body}>
        <Panel className={styles.panelValues}>
          <Section width="100%" className={styles.section}>
            <TextBox
              className={styles.textBox}
              label="Empresa"
              text="BCI Seguros Generales S.A."
              width="100%"
            />
            <TextBox
              className={styles.textBox}
              label="Beneficiario"
              text="MARIA BERNARDITA ISABEL MUÑOZ PARADA"
              width="100%"
            />
          </Section>
          <Section width="100%" wrap="wrap" className={styles.section}>
            <TextBox
              className={styles.textBox}
              label="Producto"
              text="Sala De Urgencua Familiar 21UF"
              width="100%"
            />
            <ComboBox
              className={styles.comboBox}
              label="Asistencia"
              data={["Urgecia medica por enfermedad", "Otro Item"]}
              width="100%"
            />
            <TextBox
              className={styles.textBox}
              label="Monto disponible"
              text="0"
              width="190px"
            />
            <TextBox
              className={styles.textBox}
              label="Eventos"
              text="0"
              width="120px"
            />
            <TextBox
              className={styles.limite}
              label="Límite"
              text=""
              width="210px"
            />
            <TextBox
              className={styles.textBox}
              label="Monto Utilizado"
              text="0"
              width="190px"
            />
            <TextBox
              className={styles.textBox}
              label="Eventos usados"
              text="0"
              width="120px"
            />
          </Section>
          <Section className={styles.section}>
            <Table height="285px" className={styles.tableValues}>
              <TableHeader>
                <TableCell>Dato</TableCell>
                <TableCell>Valor</TableCell>
                <TableCellEnd></TableCellEnd>
              </TableHeader>
              <TableDetail>
                <TableRow>
                  <TableCell>Tipo de previsión</TableCell>
                  <TableCell>ISAPRE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fecha de nacimiento</TableCell>
                  <TableCell>20/10/1986</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rut del beneficiario</TableCell>
                  <TableCell>16.360.110-9</TableCell>
                </TableRow>
              </TableDetail>
            </Table>
          </Section>
        </Panel>

        <Panel className={styles.panelEvents}>
          <Section className={styles.section} aling="space-between">
            <Table height="400px" className={styles.tableEvents}>
              <TableHeader>
                <TableCell>Fecha</TableCell>
                <TableCell>Hora</TableCell>
                <TableCell>Operador</TableCell>
                <TableCell>Etapa/Acción</TableCell>
                <TableCell></TableCell>
                <TableCellEnd></TableCellEnd>
              </TableHeader>
              <TableDetail>
                <TableRow>
                  <TableCell aling="center">07/01/2024</TableCell>
                  <TableCell aling="center">19:52</TableCell>
                  <TableCell aling="start">Lia García</TableCell>
                  <TableCell aling="start">Datos del servicio</TableCell>
                  <TableCell aling="center">
                    <Icon name="search" color="#979797"></Icon>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell aling="center">07/01/2024</TableCell>
                  <TableCell aling="center">19:52</TableCell>
                  <TableCell aling="start">Lia García</TableCell>
                  <TableCell aling="start">Datos del evento</TableCell>
                  <TableCell aling="center">
                    <Icon name="search" color="#979797"></Icon>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell aling="center">07/01/2024</TableCell>
                  <TableCell aling="center">19:52</TableCell>
                  <TableCell aling="start">Lia García</TableCell>
                  <TableCell aling="start">Datos del beneficiario</TableCell>
                  <TableCell aling="center">
                    <Icon name="search" color="#979797"></Icon>
                  </TableCell>
                </TableRow>
              </TableDetail>
            </Table>
            <Capsule text="3 acciones" backgroundColor="blue" />
            <Button text="Chat" iconName="chat" backgroundColor="#03495C" />
          </Section>
        </Panel>
      </Body>
    </Screen>
  );
};

export default Case;
