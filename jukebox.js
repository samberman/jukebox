// 	// evaluate each array item so it can be played/paused/skipped
// 	// move to the next array item.


		// var playlist = ["https://archive.org/download/radiohead_159/Radiohead1997-OkComputerKarmaPolicemus.ge.mp3", "https://archive.org/download/DanielBrettJazz/Jazz.mp3"];

		function Song(name, artist, url){
			this.name = name
			this.artist = artist
			this.url = url
		}

	function Jukebox(){
	
		this.currentSong = 0

		this.playlist = [];
			// adds the hardcoded songs to the playlist
		this.preload = function(song){
			console.log(song);
			this.playlist.push(song);
		}


		

		this.play = function(){
				console.log('its playing yall')
				console.log(this.playlist)
				document.getElementById("song").setAttribute("src", this.playlist[this.currentSong].url)
				document.getElementById("song").play()
		}

		this.pause = function(){
				document.getElementById("song").pause()
		}
		// moves the platlist array to the next song in the array, then plays that song.
		this.next = function(){
				console.log("helllllllo")
			this.currentSong ++
			this.play;
			jukebox.play();
			// document.getElementById("song").setAttribute("src", this.playlist[1].jukebox.play();
		}

		// to add a song to the playlist array.
	this.addSong = function(name, artist, url){
            console.log('helllllllo');
            var name = document.getElementById("name").value;
            var artist = document.getElementById("artist").value;
            var url = document.getElementById("url").value;

            var banana = new Song(name,artist,url)
            console.log(banana);
                this.playlist.push(banana)
            console.log(jukebox.playlist);
        }
	
	}
		
		
		// function addSong(name, artist, url){
		// 	this.name = document.getElementById("artist").value;
		// function addSong(name, artist, url){
		// 	this.name = document.getElementById("url").value;

		// button to add song on user side
		// document.getElementById("choose").addEventListener("click", function(jukebox.addSong){
		// 	console.log("your song is added!")
		// 	this.name = document.getElementById("name").value;
		// 	this.artist = document.getElementById("artist").value;
		// 	this.url = document.getElementById("url").value;
		// 	console.log("your song will play next!")
			
		// 	var banana = new Song(name, artist, url)
		// 	this.playlist.push(banana)

			// });
	// var song1 = new Song("https://archive.org/download/radiohead_159/Radiohead1997-OkComputerKarmaPolicemus.ge.mp3");
	
	var song2 = new Song("Whip it", "Devo", "https://ia800209.us.archive.org/13/items/Whip_It_1/80sDevoWhipIt.mp3")



	// var song2 = new Song("Fire On The Mountain", "Grateful Dead", "https://ia802608.us.archive.org/3/items/gd1977-05-08.shure57.stevenson.29303.flac16/gd1977-05-08d02t05.mp3")

	

	var jukebox = new Jukebox();
	// jukebox.addSong(song1);
	// jukebox.addSong(song2);

	jukebox.preload(song2);
