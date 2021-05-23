import { useSelector } from 'react-redux';
import { ProjectsTemplate, BoardList, Footer } from 'components';
import { BoardsState } from 'lib/types/Board';

function Projects() {
  const boards = useSelector((state: BoardsState) => state.boards);

  document.title = `okdohyuk's home`;

  return (
    <ProjectsTemplate
      boardlist={<BoardList boards={boards} />}
      footer={<Footer />}
    />
  );
}

export default Projects;
