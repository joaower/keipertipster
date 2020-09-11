import React from 'react'
import Table from './Table'
import TableBodyRow from './Row'

const Editable = ({ data, setData }) => {
  const columns = [
    {
      title: 'Desporto',
      field: 'sport',
      lookup: {
        Basquetebol: 'Basquetebol',
        Tennis: 'Tenis',
        Soccer: 'Futebol',
        Hockey: 'Hoquei',
        Baseball: 'Basebol',
      },
      initialEditValue: 1,
      cellStyle: {
        width: '2rem',
        maxWidth: '2rem',
      },
      headerStyle: {
        width: '2rem',
        maxWidth: '2rem',
      },
    },
    {
      title: 'Competição',
      field: 'competition',
      //   initialEditValue: 'initial edit value'
    },
    { title: 'Jogo', field: 'match' },
    { title: 'Odd', field: 'odd', type: 'currency' },
    { title: 'Data', field: 'date', type: 'datetime' },
    {
      title: 'Descrição',
      field: 'description',
      align: 'justify',
      cellStyle: {
        width: '1000px',
        maxWidth: '1000px',
      },
      headerStyle: {
        width: '1000px',
        maxWidth: '1000px',
      },

      //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
  ]
  /* const [data, setData] = React.useState([
    {
      sport: "1",
      competition: "Baran",
      sport: "Sporting - Benfica",
      date: 63,
      description: "Descrição",
    },
  ]); */

  return (
    <Table
      // tableRef={this.props.tableRef}
      title="Editable Preview"
      options={{
        selection: true,
        actionsColumnIndex: -1,
      }}
      components={{
        Row: TableBodyRow,
      }}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                setData([...data, newData])
              }
              resolve()
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                const dataUpdate = [...data]
                const index = oldData.tableData.id
                dataUpdate[index] = newData
                setData([...dataUpdate])
              }
              resolve()
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                const dataDelete = [...data]
                const index = oldData.tableData.id
                dataDelete.splice(index, 1)
                setData([...dataDelete])
              }
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}

export default Editable
