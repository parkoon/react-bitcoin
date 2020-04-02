import React from 'react'
import Table from './index'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'

export default {
  title: 'Table',
  component: Table,
}

export const Default = () => (
  <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>코인</TableCell>
          <TableCell>시가 총액</TableCell>
          <TableCell>현재 시세</TableCell>
          <TableCell>거래 시간</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>비트코인</TableCell>
          <TableCell>234,234,234,234원</TableCell>
          <TableCell>540,555원</TableCell>
          <TableCell>2019/09/17</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>비트코인</TableCell>
          <TableCell>234,234,234,234원</TableCell>
          <TableCell>540,555원</TableCell>
          <TableCell>2019/09/17</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
)
