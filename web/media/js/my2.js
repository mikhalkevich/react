/** @jsx React.DOM */
// Call to function with anonymous callback
loadJSON(function (response) {
// Do Something with the response e.g.
    fake = JSON.parse(response);
    //console.log(fake);

    var Grid = React.createClass({
        render(){
            return (
                <Griddle results={this.props.r} columnMetadata={columnMeta} rowMetadata={rowMeta} tableClassName="table"
                         showFilter={false} showSettings={true} resultsPerPage={10}
                         columns={["author", "name", "genre", "year"]}/>
            )
        }
    });

    var BabyNames = React.createClass({
        render() {
            d = [];
            //this.props.filter - значение атрибута
            //this.props.name - имя атрибута
            filter = this.props.filter.toLowerCase();
            name = this.props.name;
            // looping through each entry in the data array
            fake.map(function (person) {
                // only display names that match current input string
                cat = person.name;

                if (name == 'genre') {
                    cat = person.genre;
                }
                if (name == 'year') {
                    cat = person.year;
                }

                if (!cat.toLowerCase().indexOf(filter)) {
                    d[d.length] = {
                        "author": person.author,
                        "name": person.name,
                        "genre": person.genre,
                        "id": person.id,
                        "year": person.year
                    };
                }

            });
            if (d !== fake) {
                return (
                    <Grid r={d}/>
                )
            } else {
                return (
                    <Grid r={fake}/>
                )
            }

        }
    });

    var Filter = React.createClass({


        filterTrigger() {
            this.props.filterUpdate(this.refs.filterInput.name, this.refs.filterInput.value);
        },
        filterG() {
            this.props.filterUpdate(this.refs.filterGenre.name, this.refs.filterGenre.value);
        },
        filterY() {
            this.props.filterUpdate(this.refs.filterYear.name, this.refs.filterYear.value);
        },
        render() {

            var a = [];
            var b = [];
            fake.map(function (l) {
                a[l.id] = l.genre;
                b[l.id] = l.year;
            });
            genre = unique(a);
            year = unique(b.sort());

            return (
                <form>
                    <label for="name">название</label><br />
                    <input type="text"
                           name="name"
                           ref="filterInput"
                           placeholder="Type to filter.."
                        /* binding the input value to state */
                           onChange={ this.filterTrigger }/>

                    <label for="genre">жанр</label><br />
                    <select name="genre" ref="filterGenre" id="genre" onChange={ this.filterG }>
                        <option value="">All genres</option>
                        {
                            genre.map(function (l) {
                                if (l != null) {
                                    return <option value={l}>{l}</option>
                                }
                            })
                        }
                    </select>
                    <br />
                    <label for="year">год</label><br />
                    <select name="year" ref="filterYear" onChange={ this. filterY}>
                        <option value="">All years</option>
                        {
                            year.map(function (l) {
                                if (l != null) {
                                    return <option value={l}>{l}</option>
                                }
                            })
                        }
                    </select>
                    <br/>
                </form>
            )
        }
    });

    var App = React.createClass({
        getInitialState() {
            return {
                filterName: '',
                filterText: ''
            }
        },
        // the 'value' param below = value of input field, sent from Filter component via the filterTrigger method
        stateUpdate(name, value) {
            //console.log(name);
            this.setState({
                filterName: name,
                filterText: value
            });
        },
        render() {
            return (
                <table width="100%">
                    <tr>
                        <td>
                            <BabyNames filter={this.state.filterText} name={this.state.filterName}/>
                        </td>
                        <td class="test">
                            <Filter filterUpdate={this.stateUpdate}/>
                        </td>
                    </tr>
                </table>
            )
        }
    });

    React.render(
        <App />,
        document.getElementById('wrapper')
    );
});