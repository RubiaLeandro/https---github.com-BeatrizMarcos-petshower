import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;
import { Transporte, DadosService } from 'src/app/services/dados.service';
import { RascunhosService} from 'src/app/services/rascunhos.service'


@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements AfterViewInit{
  map;
  mapOptions = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  }
  endereco;

  public newDados: Transporte = {
    enderecoValue: '',
    endereco2Value: '',
    enderecocertoValue: null,
  };

  @ViewChild('mapElement',{read: ElementRef, static: false}) mapElement: ElementRef;


  constructor(private geolocation: Geolocation, private dadosService: DadosService, private rascunhosService: RascunhosService) {}
  
  public save() {
    this.rascunhosService.addTransporte(this.newDados);
  }

  public validacaoendereco(){
    if(this.newDados.enderecocertoValue === 'Sim'){
      console.log('Identificando');
      this.newDados.endereco2Value = this.newDados.enderecoValue;
    }
  }

  public Sim(){
    this.newDados.enderecocertoValue = 'Sim';

  }

  public Não(){
    this.newDados.enderecocertoValue = 'Não';
  }

   loadMap(){
     this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
     const marker = new google.maps.Marker({
       position: this.mapOptions.center,
       map: this.map, 
       title: 'Localização Atual',
     });
     this.geocodeLatLng(this.mapOptions.center);
   }

    geocodeLatLng(currentPosition){
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: currentPosition},(results, status) => {
        if (status === "OK") {
          if (results[0]) {
            this.newDados.enderecoValue = results[0].formatted_address;
            this.map.setZoom(11);
            const marker = new google.maps.Marker({
              position: currentPosition,
              map: this.map,
            });
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );}
   
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.mapOptions.center.lat =  resp.coords.latitude;
      this.mapOptions.center.lng = resp.coords.longitude;
      this.loadMap();
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}