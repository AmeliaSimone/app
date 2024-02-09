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

import styles from "./Case.module.scss";

export const Case = () => {
  return (
    <Screen>
      <Header />
      <Body className={styles.body}>
        <Panel className={styles.panel}>
          <Section width="550px" className={styles.section}>
            <TextBox className={styles.textBox}
              label="Empresa"
              text="BCI Seguros Generales S.A."
              width="100%"
            />
            <TextBox className={styles.textBox}
              label="Beneficiario"
              text="MARIA BERNARDITA ISABEL MUÑOZ PARADA"
              width="100%"
            />
          </Section>
          <Section width="550px" wrap="wrap" className={styles.section}>
            <TextBox className={styles.textBox}
              label="Producto"
              text="Sala De Urgencua Familiar 21UF"
              width="100%"
            />
            <ComboBox className={styles.comboBox}
              label="Asistencia"
              data={["Urgecia medica por enfermedad", "Otro Item"]}
              width="100%"
            />
            <TextBox className={styles.textBox}
              label="Monto disponible"
              text="0"
              width="190px"
            />
            <TextBox className={styles.textBox} label="Eventos" text="0" width="120px" />
            <TextBox className={styles.textBox} label="Límite" text="" width="228px" />
            <TextBox className={styles.textBox}
              label="Monto Utilizado"
              text="0"
              width="190px"
            />
            <TextBox className={styles.textBox} label="Eventos usados" text="0" width="120px" />
          </Section>
          <Section className={styles.section}>
            <Table height="285px" className={styles.table}>
              <TableHeader>
                <TableCell width="265px">Dato</TableCell>
                <TableCell width="275px">Valor</TableCell>
                <TableCellEnd></TableCellEnd>
              </TableHeader>
              <TableDetail>
                <TableRow>
                  <TableCell width="265px">Tipo de previsión</TableCell>
                  <TableCell width="275px">ISAPRE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="265px">Fecha de nacimiento</TableCell>
                  <TableCell width="275px">20/10/1986</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="265px">Rut del beneficiario</TableCell>
                  <TableCell width="275px">16.360.110-9</TableCell>
                </TableRow>
              </TableDetail>
            </Table>
          </Section>
        </Panel>

        <Panel>
          <Section aling="space-between"  className={styles.section}>
            <Table height="400px" className={styles.table}>
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
                  <TableCell width="95px" aling="center">
                    07/01/2024
                  </TableCell>
                  <TableCell width="60px" aling="center">
                    19:52
                  </TableCell>
                  <TableCell width="180px" aling="start">
                    Lia García
                  </TableCell>
                  <TableCell width="204px" aling="start">
                    Datos del servicio
                  </TableCell>
                  <TableCell width="40px" aling="center">
                    <Icon name="search" color="#979797"></Icon>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="95px" aling="center">
                    07/01/2024
                  </TableCell>
                  <TableCell width="60px" aling="center">
                    19:52
                  </TableCell>
                  <TableCell width="180px" aling="start">
                    Lia García
                  </TableCell>
                  <TableCell width="204px" aling="start">
                    Datos del evento
                  </TableCell>
                  <TableCell width="40px" aling="center">
                    <Icon name="search" color="#979797"></Icon>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="95px" aling="center">
                    07/01/2024
                  </TableCell>
                  <TableCell width="60px" aling="center">
                    19:52
                  </TableCell>
                  <TableCell width="180px" aling="start">
                    Lia García
                  </TableCell>
                  <TableCell width="204px" aling="start">
                    Datos del beneficiario
                  </TableCell>
                  <TableCell width="40px" aling="center">
                    <Icon name="search" color="#979797"></Icon>
                  </TableCell>
                </TableRow>
              </TableDetail>
            </Table>
            
            
          </Section>
        </Panel>
      </Body>
    </Screen>
  );
};

export default Case;
