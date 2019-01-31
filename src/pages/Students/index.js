import React, { Component } from 'react';
import './style.scss';
import Pagination from 'react-js-pagination';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';

//chamadas da biblioteca
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

class Students extends Component {
  state = {
    courses: [],
    search: '',
    activePage: 1,
    countPerPage: 5,
    tab: 0,
    coursesTeste:[],
    coursesAuditados:[]
  };

  //chamadas students
  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };


  async componentDidMount() {
    const res = await Open.get('v_em_aberto');
    const resTeste = await Open.get('v_geral');
    const resAuditados = await Open.get('v_auditados');

    this.setState({
      courses : res.data ,
      coursesTeste : resTeste.data,
      coursesAuditados : resAuditados.data,

    });

  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleClick = academic_register => {
    this.props.history.push(`/process/${academic_register}`);
  };

  handleClick = academic_register => {
    this.props.history.push(`/approvallaws/${academic_register}`);
  };



  render() {
    return (
      <Tabs
        defaultTab="one"
        onChange={tabId => {
          console.log(tabId);
        }}
      >
        <TabPanel tabId="one">
          <div className="container">
            <h2 className="title">Nome do Curso - 1º VIA</h2>
            <fieldset> <Menu /> </fieldset>
            <fieldset>
              <table className="table table-hover borda-tabela-titulos table2">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Polo</th>
                    <th scope="col">
                      Semestre / <br /> Ano de Ingresso
                    </th>
                    <th scope="col">
                      Semestre / <br /> de Conclusão
                    </th>
                    <th scope="col">
                      Numero do <br />
                      Processo
                    </th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {this.state.courses
                    .filter(data => RegExp(this.state.search).test(data.name))
                    .filter(
                      (data, index) =>
                        index >=
                          this.state.countPerPage *
                            (this.state.activePage - 1) &&
                        index < this.state.countPerPage * this.state.activePage
                    )
                    .map(data => (
                      <tr>
                        <td
                          onClick={() =>
                            this.handleClick(data.academic_register)
                          }
                        >
                          {data.name}
                        </td>
                        <td
                          onClick={() =>
                            this.handleClick(data.academic_register)
                          }
                        >
                          {data.academic_register}
                        </td>
                        <td
                          onClick={() =>
                            this.handleClick(data.academic_register)
                          }
                        >
                          {data.polo}
                        </td>
                        <td
                          onClick={() =>
                            this.handleClick(data.academic_register)
                          }
                        >
                          {data.year_entry}
                        </td>
                        <td
                          onClick={() =>
                            this.handleClick(data.academic_register)
                          }
                        >
                          {data.year_conclusion}
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="float-right">
                <div className="padding">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.courses.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link link-cor"
                  />
                </div>
              </div>
            </fieldset>
            <br />
            {/* <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar" href="tg">
                  VISUALIZAR
                </a>
              </div>
            </div>
          </div> */}
          </div>
        </TabPanel>

        {/* the end table one */}

        <TabPanel tabId="two">
          <div className="container">
            <h2 className="title">Nome do Curso - 2º VIA</h2>
            <fieldset>
              <Menu />
            </fieldset>
            <fieldset>
              <div class="row top">
                <div className="col-md-4">{/* <Search /> */}</div>
                {/*<div className="col-md-7">
                    <div className="right" /> <Dowloand />
                </div>*/}
              </div>
              <table className="table table-hover borda-tabela-titulos table2">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Curso</th>
                    <th scope="col">
                      Semestre / <br /> Ano de Ingresso
                    </th>
                    <th scope="col">
                      Semestre / <br /> de Conclusão
                    </th>
                    <th scope="col">Atribuido em</th>
                    <th scope="col">
                      Numero do <br />
                      Processo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.coursesTeste
                    .filter(
                      (data, index) =>
                        index >=
                          this.state.countPerPage *
                            (this.state.activePage - 1) &&
                        index < this.state.countPerPage * this.state.activePage
                    )
                    .map(data => (
                      <tr
                        onClick={() => this.handleClick(data.academic_register)}
                      >
                        <td>{data.name}</td>
                        <td>{data.academic_register}</td>
                        <td>{data.polo}</td>
                        <td>{data.year_entry}</td>
                        <td>{data.year_conclusion}</td>
                        <td>xxxxxxx</td>
                        <td />
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="float-right">
                <div className="padding">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.courses.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
            </fieldset>
            <br />
            {/* <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar" href="tg">
                  VISUALIZAR
                </a>
              </div>
            </div>
          </div> */}
          </div>
        </TabPanel>

        {/* the end table two */}

        <TabPanel tabId="three">
        <div className="container">
          <h2 className="title">Nome do Curso - 1º VIA</h2>
          <fieldset>
            <Menu/>
          </fieldset>
          <fieldset>
            {/* <div class="row">
              <div className="col-md-4">
                <Search />
              </div>
              <div className="col-md-7">
              <div className="right" /> <Dowloand />
             </div>
            </div> */}
            <table className="table table-hover borda-tabela-titulos table2">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">RA</th>
                  <th scope="col">Curso</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col">Motivo da Retenção</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {console.log(this.state.coursesAuditados)}
                {
                  // .filter(item => RegExp(search, 'i').test(item.student_name))
                  //.filter(
                  //  (data, index) =>
                  //    index >=
                  //      this.state.countPerPage * (this.state.activePage - 1) &&
                  //    index < this.state.countPerPage * this.state.activePage
                  //)
                  //.map(data => (
                  //  <tr onClick={() => this.handleClick(data.ra_student)}>
                  //    <td>{data.student_name}</td>
                  //    <td>{data.ra_student}</td>
                  //    <td>{data.course_name}</td>
                  //    <td>{data.year_entry}</td>
                  //    <td>{data.year_conclusion}</td>
                  //    <td>{data.reason_retention}</td>
                  //  </tr>
                  //))}
                }
              </tbody>
            </table>
            <div className="float-right">
              <div className="padding">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={5}
                  totalItemsCount={this.state.courses.length}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                  innerClass="pagination"
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            </div>
          </fieldset>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                {/*<a className="selecionar" href="tg">
                ENVIAR E-MAIL
</a>*/}
              </div>
            </div>
          </div>
        </div>
        </TabPanel>

        {/* the end table three */}

        <TabPanel tabId="for">
        <div className="container">
          <h2 className="title">Nome do Curso - 1º VIA</h2>
          <fieldset>
            <Menu  />
          </fieldset>
          <fieldset>
            <div class="row">
              <div className="col-md-6">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultChecked2"
                  />
                  {/*<label class="custom-control-label" for="defaultChecked2">
                  Selecionar Todos
  </label>*/}
                </div>
              </div>
              {/*<div className="col-md-6">
              <div className="right" /> <Dowloand />
</div>*/}
            </div>
            <table className="table table-hover borda-tabela-titulos table2">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">RA</th>
                  <th scope="col">Curso</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.coursesAuditados

                  // .filter(data => RegExp(this.state.search).test(data.name))
                  // .filter(
                  //   (data, index) =>
                  //     index >=
                  //       this.state.countPerPage * (this.state.activePage - 1) &&
                  //     index < this.state.countPerPage * this.state.activePage
                  // )
                  // .map(data => (
                  //   <tr>
                  //     <td>{data.student_name}</td>
                  //     <td>{data.ra_student}</td>
                  //     <td>{data.course_name}</td>
                  //     <td>{data.year_entry}</td>
                  //     <td>{data.year_conclusion}</td>
                    // <td>
                      //  <ButtonSearch id={data.ra_student} />
                      //</td>
                    // </tr>
                }
                  ))}
              </tbody>
            </table>
            <div className="float-right">
              <div className="padding">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={5}
                  totalItemsCount={this.state.courses.length}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                  innerClass="pagination"
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            </div>
          </fieldset>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar">IMPRIMIR</a>
              </div>
            </div>
          </div>
        </div>
        </TabPanel>
      </Tabs>
    );
  }
}


export default Students;
