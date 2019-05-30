package br.com.pdv;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean(name="controleLojaBean")
@SessionScoped
public class ControleLoja {

	
	private boolean lojaGravada;
	private String saida;
	private String nomeLoja;
	private String parceiro;
	private String regional;
	private String email;
	private String diretoria;
	private String telefone;
	private String celular;
	private String indicador;
	private String cep;
	private String endereco;
	private int numero;
	private String bairro;
	private String cidade;
	private String estado;
	
	private List<String> selectReg;
	private List<String> selectDir;
	private List<String> selectInd;
	
	public ControleLoja() {
		setLojaGravada(false);

	}
	
	public void gravar() {
		setLojaGravada(true);
			if(nomeLoja != null) {
			System.out.println("Gravou "+ nomeLoja);
			}
			System.out.println("Não recuperou os dados ainda....");
		}
	
	

	public String getRegional() {
		return regional;
	}

	public void setRegional(String regional) {
		this.regional = regional;
	}

	public String getDiretoria() {
		return diretoria;
	}

	public void setDiretoria(String diretoria) {
		this.diretoria = diretoria;
	}

	public String getIndicador() {
		return indicador;
	}

	public void setIndicador(String indicador) {
		this.indicador = indicador;
	}

	public List<String> getSelectReg() {
		return selectReg;
	}

	public void setSelectReg(List<String> selectReg) {
		this.selectReg = selectReg;
	}

	public List<String> getSelectDir() {
		return selectDir;
	}

	public void setSelectDir(List<String> selectDir) {
		this.selectDir = selectDir;
	}

	public List<String> getSelectInd() {
		return selectInd;
	}

	public void setSelectInd(List<String> selectInd) {
		this.selectInd = selectInd;
	}

	public String getNomeLoja() {
		return nomeLoja;
	}


	public void setNomeLoja(String nomeLoja) {
		this.nomeLoja = nomeLoja;
	}


	public String getParceiro() {
		return parceiro;
	}


	public void setParceiro(String parceiro) {
		this.parceiro = parceiro;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getTelefone() {
		return telefone;
	}


	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}


	public String getCelular() {
		return celular;
	}


	public void setCelular(String celular) {
		this.celular = celular;
	}


	public String getCep() {
		return cep;
	}


	public void setCep(String cep) {
		this.cep = cep;
	}


	public String getEndereco() {
		return endereco;
	}


	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}


	public int getNumero() {
		return numero;
	}


	public void setNumero(int numero) {
		this.numero = numero;
	}


	public String getBairro() {
		return bairro;
	}


	public void setBairro(String bairro) {
		this.bairro = bairro;
	}


	public String getCidade() {
		return cidade;
	}


	public void setCidade(String cidade) {
		this.cidade = cidade;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}


	public boolean isLojaGravada() {
		return lojaGravada;
	}

	public void setLojaGravada(boolean lojaGravada) {
		this.lojaGravada = lojaGravada;
	}

	public String getSaida() {
		return saida;
	}

	public void setSaida(String saida) {
		this.saida = saida;
	}

	@PostConstruct
	public void regionais() {
		selectReg = new ArrayList<String>();
		selectReg.add("Opção 1");
		selectReg.add("Opção 2");
		selectReg.add("Opção 3");
		selectReg.add("Opção 4");
		
		diretorias();
		
	}
	
	public void diretorias() {
		selectDir = new ArrayList<String>();
		selectDir.add("Opção 1");
		selectDir.add("Opção 2");
		selectDir.add("Opção 3");
		selectDir.add("Opção 4");
		
		indicadores();
	}
	
	public void indicadores() {
		selectInd = new ArrayList<String>();
		selectInd.add("Ativo");
		selectInd.add("Inativo");
	}
	

	public String exibirDados() {
		saida ="";
		saida +="Informações da Loja:";
		saida +="</br>" + "Nome da Loja: " + getNomeLoja();
		saida +="</br>" + "Regional: " + getRegional();
		saida +="</br>" + "Nome do parceiro: " + getParceiro();
		saida +="</br>" + "Diretoria: " + getDiretoria();
		saida +="</br>" + "Email: " + getEmail();
		saida +="</br>" + "Telefone: " + getTelefone();
		saida +="</br>" + "Numero: " + getCelular();
		saida +="</br>" + "Indicador: " + getIndicador();
		saida +="</br>" + "Bairro: " + getBairro();
		saida +="</br>" + "Cidade: " + getBairro();
		saida +="</br>" + "Estado: " + getEstado();
		return "SucessoLoja.xhtml";
		}
	
	
}
