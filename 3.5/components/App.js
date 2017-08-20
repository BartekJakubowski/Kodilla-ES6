App = React.createClass({
    render: function() {
        
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
        
        getInitialState: function() {
            return {
                loading: false,
                searchingText: '',
                gif: {}
            };
        },
            
        handleSearch: function(searchingText) {
            this.setState({
                loading: true
            });
            this.getGif(searchingText, function(gif) {
                this.setState({
                    loading: false,
                    gif: gif,
                    searchingText: searchingText
                });
            }.bind(this));
        },
            
        /*getGif: function(searchingText, callback) {
            var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText).data;
                    var gif = {
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: dataUrl
                    };
                    callback(gif);
                }
            };
            xhr.send();
        },*/

        getGif: function(searchingText) {
            return new Promise (
                function (resolve, reject) {
                    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', url);
                    xhr.onload = function() {
                       if (xhr.status === 200) {
                            var data = JSON.parse(xhr.responseText).data;
                            var gif = {
                                url: data.fixed_width_downsampled_url,
                                sourceUrl: data.url
                            };
                            resolve(gif);
                        } else {
                            reject(new Error(this.statusText));
                        }
                    }
                    xhr.onerror = function() {
                        reject(new Error (
                            `XMLHttpRequest Error: ${this.statusText}`));
                    }
                    xhr.send();
                }    
            )
        },
        
        return (
            <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdz gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p> //potential bug
                <Search onSearch={this.handleSearch} />
              <Gif
                loading={this.state.loading}
                url={this.state.url.loading}
                sourceUrl={this.state.gif.sourceUrl}
              />
            </div>
        );
    }
});