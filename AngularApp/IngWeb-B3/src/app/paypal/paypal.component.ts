import { Component, Input, OnInit } from '@angular/core';
import { ICreateOrderRequest } from "ngx-paypal";
import { environment } from 'src/environments/environment';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})


export class PaypalComponent implements OnInit {
  @Input() precio = -1;
  @Output() status = new EventEmitter<string>();
  @Output() recibo = new EventEmitter<any>();
  public payPalConfig: any;
  public showPaypalButtons: boolean;

  

  constructor() { }

  ngOnInit(): void {
    this.payPalConfig = {
      currency: "EUR",
      clientId: environment.paypalClientId,
      createOrder: (data : any)=>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: this.precio.toString(),
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: this.precio.toString()
                  }
                }
              },
              items: [
                {
                  name: "Reserva de hospedaje",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: this.precio.toString()
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data: any, actions: any) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
          this.status.emit("Aprobado");
        });
      },
      onClientAuthorization:(data : any)=> {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
        this.status.emit("Autorizado");
        this.recibo.emit(data);
        console.log("Gracias", data.payer.name.given_name, ", su ID de pago es:", data.id )
      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
        this.status.emit("Cancelado");
      },
      onError: (err: any) => {
        console.log("OnError", err);
        this.status.emit("Error");
      },
      onClick: (data: any, actions : any) => {
        console.log("onClick", data, actions);
      }
    };
  }
 
  pay() {
    this.showPaypalButtons = true;
  }
 
  back(){
    this.showPaypalButtons = false;
  }
}


