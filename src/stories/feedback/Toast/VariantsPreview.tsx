// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Grid from '@mui/material/Grid2'
import { Button, usePromiseToast, useToast } from 'components'
import { Icons } from 'react-toastify'

const VariantsPreview = (args: any) => {
  const addToast = useToast()
  const addPromiseToast = usePromiseToast()

  const resolveAfter3Sec = () => new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <Grid container spacing={2} justifyItems={'flex-start'}>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() =>
            addToast(
              `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              'success',
              { ...args }
            )
          }
        >
          {'Success toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an info message!', 'info', { ...args })}>
          {'Info toast'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() => addToast('This is a warning message!', 'warning', { ...args })}
        >
          {'Warning toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is an error message!', 'error', { ...args })}>
          {'Error toast'}
        </Button>
      </Grid>
      <Grid>
        <Button size={'small'} color={'primary'} onClick={() => addToast('This is a default message!', { ...args })}>
          {'Default toast'}
        </Button>
      </Grid>
      <Grid>
        <Button
          size={'small'}
          color={'primary'}
          onClick={() =>
            addPromiseToast(
              resolveAfter3Sec(),
              {
                render() {
                  return 'Promise is pending'
                },
                icon: Icons.spinner
              },
              {
                render() {
                  return 'Promise resolved 👌'
                },
                icon: Icons.success
              },
              {
                render() {
                  return 'Promise rejected 🤯'
                },
                icon: Icons.error
              },
              { ...args, draggable: true }
            )
          }
        >
          {'Promise toast'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default VariantsPreview
