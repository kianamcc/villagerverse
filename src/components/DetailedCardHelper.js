class DetailedCardHelper {
    constructor(data) {
        this.id = data.id
        this.name = data.name['name-EUen']
        this.img = data.image_uri
        this.species = data.species
        this.personality = data.personality
        this.saying = data.saying
        this.birthday = data['birthday-string']
    }
}

export default DetailedCardHelper