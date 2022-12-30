<script lang="ts">
import Heading from '../ui/HeadingText.vue';
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';
import Fragment from '../ui/Fragment.vue';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import DatePicker  from '../ui/DatePicker.vue';
import InvoiceItemList from '../shared/InvoiceItemList.vue';

import { useScreenStore } from '../../stores/screen';
import { useThemeStore } from  '../../stores/theme';
 import  { storeToRefs } from 'pinia';


    interface formInterFace {
        streetAddress: any,
        city: String,
        postCode: String,
        country: String,
        clientName: String,
        clientEmail: String,
        toAddress: String,
        clientCity: String,
        clientPostCode: String,
        clientCountry: String,
        invoiceDate: String,
        invoiceDescription: String
    }

    export default {
        setup() {
            return { v$: useVuelidate() }
        },

        components: {Heading, Input, Button, Fragment, DatePicker, InvoiceItemList},
        props: ['toggle','show'],
        data() {
            return {
                isEditing: false,
                form: {
                    streetAddress: '',
                    city: '',
                    postCode: '',
                    country: '',
                    clientName: '',
                    clientEmail: '',
                    toAddress: '',
                    clientCity: '',
                    clientPostCode: '',
                    clientCountry: '',
                    invoiceDate: '',
                    invoiceDescription: ''
                } as formInterFace
            }
        },

        methods: {
            updateFieldValue(name: String, value: any) {
                switch(name)  {
                    case 'streetAddress':
                        this.v$.form.streetAddress.$model = value;
                    break;
                    case 'city':
                        this.v$.form.city.$model = value;
                    break;
                    case 'postCode':
                        this.v$.form.postCode.$model = value;
                    break;
                    case 'country':
                        this.v$.form.country.$model = value; 
                    break;
                    case 'clientName':
                        this.v$.form.clientName.$model = value; 
                    break;
                    case 'clientEmail':
                        this.v$.form.clientEmail.$model = value; 
                    break;
                    case 'toAddress':
                        this.v$.form.toAddress.$model = value; 
                    break;
                    case 'clientCity':
                        this.v$.form.clientCity.$model = value; 
                    break;
                    case 'clientPostCode':
                        this.v$.form.clientPostCode.$model = value; 
                    break;
                    case 'clientCountry':
                        this.v$.form.clientCountry.$model = value; 
                    break;
                    case 'invoiceDate':
                        this.v$.form.invoiceDate.$model = value; 
                    break;
                    case 'invoiceDescription':
                        this.v$.form.invoiceDescription.$model = value; 
                    break;
                }
            },

            onSubmit(event: SubmitEvent) {
                // console.log('Form Submited', event.submitter);
                let fields = {...this.form};
                console.log(fields);
            }
        },

        validations() {
            return {
                form: {
                    streetAddress: { required, min: minLength(3) },
                    city: { required, },
                    postCode: { required },
                    country: { required },
                    clientName: { required },
                    clientEmail: { required },
                    toAddress: { required },
                    clientCity: { required },
                    clientPostCode: { required },
                    clientCountry: { required },
                    invoiceDate:  { required },
                    invoiceDescription: { required }
                }
            }
        }
    }
</script>


<template>
    <div class="form-container form-dark" :style="{ 'transform': show ? 'translateX(0%)' : 'translateX(-100%)' }">
        <form class="form-content content-dark" @submit.prevent="onSubmit">
            <div class="spacer">
                <Heading :type="'h1'">
                    {{isEditing ? "Edit  Invoice #53423" : "New  Invoice"}}
                </Heading>
                <p class="form-section-title">Bill From</p>
                <Input :label="'Street Address'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.streetAddress.$errors" :name="'streetAddress'" :value="v$.form.streetAddress.$model" />
                <div class="input-grid-container">
                    <Input :label="'City'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.city.$errors" :name="'city'" :value="v$.form.city.$model" />
                    <Input :label="'Post Code'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.postCode.$errors" :name="'postCode'" :value="v$.form.postCode.$model" />
                    <Input :label="'Country'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.country.$errors" :name="'country'" :value="v$.form.country.$model" />
                </div>
                <p class="form-section-title">Bill To</p>
                <Input :label="'Client\'s Name'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.clientName.$errors" :name="'clientName'" :value="v$.form.clientName.$model" />
                <Input :label="'Client\'s Email'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.clientEmail.$errors" :name="'clientEmail'" :value="v$.form.clientEmail.$model" />
                <Input :label="'Street Address'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.toAddress.$errors" :name="'toAddress'" :value="v$.form.toAddress.$model" />
                 <div class="input-grid-container">
                    <Input :label="'City'" :updateValue="updateFieldValue" :type="'text'" :errors="v$.form.clientCity.$errors" :name="'clientCity'" :value="v$.form.clientCity.$model" />
                    <Input :label="'Post Code'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.clientPostCode.$errors" :name="'clientPostCode'" :value="v$.form.clientPostCode.$model" />
                    <Input :label="'Country'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.clientCountry.$errors" :name="'clientCountry'" :value="v$.form.clientCountry.$model" />
                </div>
                <div class="date-terms">
                     <DatePicker :label="'Invoice Date'" :updateValue="updateFieldValue" :errors="v$.form.invoiceDate.$errors" :name="'invoiceDate'" :value="v$.form.invoiceDate.$model"/>
                </div>
                <Input :label="'Project Description'" :type="'text'" :updateValue="updateFieldValue" :errors="v$.form.invoiceDescription.$errors" :name="'invoiceDescription'" :value="v$.form.invoiceDescription.$model" />
                <InvoiceItemList  />
            </div>  
            <!-- <p>{{ form.streetAddress }}</p> -->
            <!-- ACTION  BUTTONS -->
            <div class="button-container dark-button">
                <Fragment v-if="isEditing">
                    <div></div>
                    <div>
                         <Button :type="'secondary'">
                            Cancel
                        </Button>
                        <Button :type="'primary'" :isDisabled="v$.form.$invalid">
                            Save Changes
                        </Button>
                    </div>
                </Fragment>
              <Fragment v-if="!isEditing">
                  <div>
                      <Button :type="'secondary'">
                          Discard
                      </Button>
                  </div>
                  <div>
                      <Button :type="'dark'" :isDisabled="v$.form.$invalid">
                          Save as Draft
                      </Button>
                     <Button :type="'primary'" :isDisabled="v$.form.$invalid">
                          Save & Send
                      </Button>
                  </div>
              </Fragment>
            </div>
        </form>
    </div>
    <div class="overlay" :style="{'transform': show ? 'translateX(0%)' : 'translateX(-100%)'}" @click="toggle">

    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/globals.scss';
    @import '../../scss/_mixins.scss';
    @import '../../scss/_variables.scss';

    .form-container {
        position: fixed;
        left: 0;
        top: 4.5rem;
        height: calc(100vh - 4.5rem);
        bottom: 0;
        background-color: white;
        width: 100%;
        transition: transform 0.3s ease;
        z-index: 2;
        overflow-y: auto;
        @media (min-width: $tablet) {
            max-width: 619px;
            border-radius: 0px 1.25rem 1.25rem 0;
        }

        @media (min-width: $desktop) {
            max-width: calc(719px + 6.4375rem);
            top: 0;
            left: 0;
            padding-left: 6.4375rem;
            height: 100vh;
        }

        h1 {
            font-size: 1.5rem;
        }
    }
    
    .form-dark {
          background-color: $mirage2;
          color: white;
    }

    .form-section-title {
        @include normalText;
        color: $purple;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }


    .form-content  {
          position: relative;
        h1 {
            color: $vulcan;
            margin-bottom: 1.5rem;
            span {
            color: $shipCove;
            }
        }

        @media (min-width: $tablet) {
            padding-top: 1.5rem;
        }
    }

    .content-dark {
          h1 {
                color: white;
        }
    }

    .overlay {
        background: rgba(0, 0, 0, 0.4984);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 1;
    }

    .spacer {
        padding: 0 1.5rem;
    }

    .button-container {
        height: 5rem;
        width: 100%;
        position: relative;
        background-color: white;
        box-shadow: 0 -10px 50px 0px rgba(72, 84, 159, 0.1004);
        display: flex;
        align-items: center;
        bottom: 0;
        left: 0;
        justify-content: flex-end;
        padding: 0 1.5rem;
        margin-top: 3.5rem;
        button {
            margin-left: 0.5rem;
        }

        @media (min-width: $tablet) {
            box-shadow: none;
            padding-bottom: 2rem;

            justify-content: space-between;
        }
    }

    .dark-button {
        background: $mirage2;
    }

    .input-grid-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0.5rem;
        grid-row-gap: 0px;

        div:nth-child(0) {
            grid-area: 1 / 1 / 2 / 2;
        }
        div:nth-child(1) {
            grid-area: 1 / 2 / 2 / 3;
        }
        div:nth-child(2) {
            grid-area: 2 / 1 / 3 / 3;
        }

        @media (min-width: $tablet) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            div:nth-child(0) {
            grid-area: auto;
            }
            div:nth-child(1) {
            grid-area: auto;
            }
            div:nth-child(2) {
            grid-area: auto;
            }
        }
    }

    .date-terms {
          margin-bottom: 1.5rem;
    }

</style>>