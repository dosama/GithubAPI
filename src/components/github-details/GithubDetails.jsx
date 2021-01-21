import React from 'react';
import './GithubDetails.css';

function GithubDetails(props) {

    const onRowSelected = (gist) => {
        props.onGistSelected(gist);
    }
    const getFileTypeColor = (language) => {
        switch (language) {
            case "HTML":
                return '#e34c26'
            case "JavaScript":
                return '#f1e05a'
            case 'C#':
                return '#178600'
            case 'TypeScript':
                return '#2b7489'
            case 'CSS':
                return '#563d7c'
            case 'Python':
                return '#3572A5'
            case 'HCL':
                return '#ccc'
            case 'PHP':
                return '#4F5D95'
            case 'CoffeeScript':
                return '#244776'
            case 'Vim script':
                return '#199f4b'
            case 'Shell':
                return '#89e051'

            default:
                return '#007bff'


        }

    }

    return (
        <div className="GithubDetails">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">GithubDetails</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >URL</th>
                            <th >Description</th>
                            <th >Files</th>
                            <th >Owner</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.githubDetails.map((item) =>
                            <tr key={item.id} onClick={() => onRowSelected(item)}>
                                <td >{item.id}</td>
                                < td > <span>{item.url} </span></td>
                                < td > {item.description} </td>
                                < td >
                                    <h6>{item.files[Object.keys(item.files)[0]].filename}</h6>
                                    <div className="row col-md-12">
                                        <span className="mr-4">
                                            <span className="repo-language-color mr-1" style={{ "backgroundColor": getFileTypeColor(item.files[Object.keys(item.files)[0]].language) }}></span>
                                            <span>{item.files[Object.keys(item.files)[0]].language}</span>
                                        </span>
                                    </div>

                                </td>
                                < td > {item.owner.login}   </td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>

        </div>

    );
}

export default GithubDetails;
