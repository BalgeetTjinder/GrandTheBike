import React from "react";
import BikesTable from "./BikesTable.jsx";
import { Colors, Delete, Status, Owner } from "./TableCells.jsx";
import Resolution from "./Resolution/Resolution.jsx";
import EditMessage from "./EditMessage/EditMessage.jsx";

import { StyledTypography } from "style/components/index.js";

const StolenBikes = ({
  formattedThefts,
  officers,
  deleteMessage,
  editMessage,
  isResolutionOpen,
  onStatusDoneClicked,
  openResolution,
  closeResolution,
  selectedMessageId,
  openEditMessage,
  closeEditMessage,
  isEditMessageOpen,
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: <StyledTypography variant="body1">Тип</StyledTypography>,
        accessor: "type",
      },
      {
        Header: <StyledTypography variant="body1">Цвет</StyledTypography>,
        accessor: "color",
        Cell: ({ cell: { value } }) => <Colors value={value} />,
      },
      {
        Header: <StyledTypography variant="body1">Имя владельца</StyledTypography>,
        accessor: "ownerFullName",
        Cell: ({ cell: { value, row } }) => (
          <Owner
            value={value}
            id={row.values._id}
            openEditMessage={openEditMessage}
          />
        ),
      },
      {
        Header: (
          <StyledTypography variant="body1">Ответственный сотрудник</StyledTypography>
        ),
        accessor: "officer",
      },
      {
        Header: <StyledTypography variant="body1">Статус</StyledTypography>,
        accessor: "status",
        Cell: ({ cell: { value, row } }) => (
          <Status
            value={value}
            id={row.values._id}
            editMessage={editMessage}
            openResolution={openResolution}
          />
        ),
      },
      {
        Header: <StyledTypography variant="body1">Решение</StyledTypography>,
        accessor: "resolution",
      },
      {
        Header: "",
        accessor: "_id",
        Cell: ({ cell: { value } }) => (
          <Delete value={value} deleteMessage={deleteMessage} />
        ),
      },
    ],
    []
  );
  const data = formattedThefts;

  return (
    <>
      {data.length > 0 ? (
        <>
          <BikesTable
            columns={columns}
            data={data}
            openResolution={openResolution}
          />
          <br />
          <StyledTypography variant="body1" color="black">
            * Нажмите, для получения подробной информации и редактирования
          </StyledTypography>
        </>
      ) : (
        <StyledTypography variant="body1" color="black">
          Нет сообщений о кражах
        </StyledTypography>
      )}
      {isResolutionOpen ? (
        <Resolution
          onStatusDoneClicked={onStatusDoneClicked}
          closeResolution={closeResolution}
        />
      ) : (
        ""
      )}
      {selectedMessageId ? (
        <EditMessage
          formattedThefts={formattedThefts}
          officers={officers}
          selectedMessageId={selectedMessageId}
          closeEditMessage={closeEditMessage}
          editMessage={editMessage}
          isEditMessageOpen={isEditMessageOpen}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default StolenBikes;