import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../../journal/layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const {isSaving, active} = useSelector((state)=> state.journal)
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>

      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }

      <IconButton
      disabled={isSaving}
      onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: '#00ACC1',
          ':hover': {backgroundColor: '#00ACC1', opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
