import { useSelector } from 'react-redux';

import { ProjectsTemplate, BoardList } from 'components';

type RootState = {
  boards: any;
};

function Projects() {
  document.title = `okdohyuk's home`;
  const boards = useSelector((state: RootState) => state.boards);

  return <ProjectsTemplate boardlist={<BoardList boards={boards} />} />;
}

export default Projects;
