let store = {
    state:{
        titleOfMap:'Выберите город где бы вы хотели учиться',
        titleOfSubject:'Выберите первый профильный предмет',
        citiesData:[],
        universitiesData:[],
        univer:[],
        speciality:[],
        specialitiesData:[],
        subjectsData:[],
        secondSubjectsData:[],
        isMapActive:{
        },
        subjectId:'',
        isSubjectActive: {},
        professionComponent: 1,
        professionsData:[],
        currentProfession:[],
        currentCity:'',
        profDetailsData:[],
        specUniData:[]
    },
    setProfDetailsData(data){
        this.state.profDetailsData=data;
        this._callSubscriber(this.state)
    },
    setCurrentProfession(id){
        var professions = this.state.professionsData;
        for (var i=0;i<professions.length;i++){
            let profession_id = professions[i]["id"]
            if(profession_id==id){
                this.state.currentProfession=professions[i]
            }
        }
    },
    setCurrentCity(id){
        this.state.currentCity=id;
        this._callSubscriber(this.state)
    },
    setProfessions(data){
        this.state.professionsData=data;
        this._callSubscriber(this.state)
    },
    setUpdateSubjectId(id){
        this.state.subjectId=id;
    },
    setUpdateProfession(n){
        this.state.professionComponent=n;
        this._callSubscriber(this.state)
    },
    removeSpecialities(n){
        this.state.specialitiesData=n;
        this._callSubscriber(this.state)
    },

    setMapActive(cityNum,bool){
        for (var key in this.state.isMapActive){
            this.state.isMapActive[key]=false;
        }
      this.state.isMapActive[cityNum]=bool;
      this._callSubscriber(this.state);
    },

    setSubjectActive(name,bool){
        for (var key in this.state.isSubjectActive){
            this.state.isSubjectActive[key]=false;
        }
        this.state.isSubjectActive[name]=bool;
        this._callSubscriber(this.state)
    },

    getState(){
        return this.state;
    },
    _callSubscriber(){
        console.log('was changed')
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    setCities(data){
        this.state.citiesData=data
        this._callSubscriber(this.state);
    },
    setUniversities(data){
        this.state.universitiesData=data;
        this._callSubscriber(this.state);
    },
    setSpecialities(data){
        this.state.specialitiesData=data
        this._callSubscriber(this.state);
    },
    removeUniversities(data){
        this.state.universitiesData=data;
        this._callSubscriber(this.state);
    },
    setCurrentUni(id){
        var univers = this.state.universitiesData
        for(var i = 0; i<univers.length;i++){
            let univer_id = univers[i]["id"]
            if(univer_id == id ){
                this.state.univer = univers[i]
            }
        }
    },
    setCurrentSpecUni(name){
        var specName = name;
        this.state.specUniData=[];
        for (var i=0;i<this.state.profDetailsData.length;i++){
            if (specName===this.state.profDetailsData[i].name){
                for (var j=0;j<this.state.profDetailsData[i].uni.length;j++){
                    this.state.specUniData.push(this.state.profDetailsData[i].uni[j])
                }
            }
        }
        this._callSubscriber(this.state);
    },
    setCurrentSpec(data){
        this.state.media=data;
        this._callSubscriber(this.state);
    },
    setSubjectsData(data){
        this.state.subjectsData=data;
        this._callSubscriber(this.state);
    },
    setSecondSubjectsData(data){
        this.state.secondSubjectsData=data;
        this._callSubscriber(this.state)
    }

}
export default store;
window.store=store;