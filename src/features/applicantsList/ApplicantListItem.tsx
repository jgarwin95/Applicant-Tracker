import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Applicant } from "./types";

type ApplicantListItemProps = {
  key: number;
  applicant: Applicant;
};

const ApplicantListItem = ({ applicant, key }: ApplicantListItemProps) => {
  const labelId = `checkbox-list-secondary-label-${key}`;
  return (
    <ListItem
      key={key}
      secondaryAction={
        <Button variant="contained" size="medium">
          View profile
        </Button>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${key + 1}`}
            src={`/static/images/avatar/${key + 1}.jpg`}
          />
        </ListItemAvatar>
        <ListItemText id={labelId} primary={applicant.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default ApplicantListItem;
